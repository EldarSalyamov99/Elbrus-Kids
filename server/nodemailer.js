const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'elbrus.kids@mail.ru',
      pass: 'tvqrWa4AGUCqn9taax1d',
    },
  },
  {
    from: 'Elbrus-Kids <elbrus.kids@mail.ru>',
  },
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log(info);
  });
};

module.exports = mailer;
