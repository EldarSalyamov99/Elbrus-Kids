const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs/promises');
const { User } = require('../db/models');
const mailer = require('../nodemailer');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const {
    name, phone, email, password, img,
  } = req.body;

  const message = {
    to: req.body.email,
    subject: 'Congratulations! You are successfully registered on our site',
    text: `Поздравляем Вы успешно зарегистрировались на нашем сайте!
    
    данные вашей учетной записи:
    login: ${req.body.email}
    password: ${req.body.password}`,
  };
  mailer(message);

  if (name && email && password && img) {
    try {
      const hashpass = await bcrypt.hash(password, 10);
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          name, phone, hashpass, img,
        },
      });
      if (!created) return res.status(401).json({ message: 'Пользователь с таким email уже  зарегистрирован' });

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
  console.log(req.body);
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

router.get('/check', async (req, res) => {
  if (req.session.user) {
    const user = await User.findByPk(req.session.user.id);
    console.log(user);
    return res.json(user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});
router.patch('/update', async (req, res) => {
  try {
    const { id } = req.session.user;
    await User.update(req.body, { where: { id } });
    const updateUser = await User.findOne({ where: { id } });
    return res.json(updateUser);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
});

router.get('/img', async (req, res) => {
  try {
    const images = await fs.readdir('public/images');
    res.json(images);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
