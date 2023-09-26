const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const mailer = require('../nodemailer');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { name, phone, email, password } = req.body;

  const message = {
    to: req.body.email,
    subject: 'Congratulations! You are successfully registered on our site',
    text: `Поздравляем Вы успешно зарегистрировались на нашем сайте!
    
    данные вашей учетной записи:
    login: ${req.body.email}
    password: ${req.body.password}`,
  };
  mailer(message);

  if (name && email && password) {
    try {
      const hashpass = await bcrypt.hash(password, 10);
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { name, phone, hashpass },
      });
      if (!created) return res.status(401).json({ message: 'User already exists' });

      const sessionUser = JSON.parse(JSON.stringify(user));
      delete sessionUser.password;
      req.session.user = sessionUser;
      return res.json(sessionUser);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Server error' });
    }
  }

  return res.sendStatus(500);
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (!user) return res.status(401).json({ message: 'User does not exist' });
      if (!(await bcrypt.compare(password, user.hashpass))) {
        return res.status(401).json({ message: 'Incorrect password' });
      }

      const sessionUser = JSON.parse(JSON.stringify(user));
      delete sessionUser.password;
      req.session.user = sessionUser;
      return res.json(sessionUser);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Server error' });
    }
  }
  return res.status(500).json({ message: 'No email or password' });
});

router.get('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.update({ ...req.body }, { where: { id } });
    const updateUser = await User.findOne({ where: { id } });
    return res.json(updateUser);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
});

module.exports = router;
