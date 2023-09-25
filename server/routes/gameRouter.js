const express = require('express');
const { Category, Question, Answer, Statistic } = require('../db/models');

const router = express.Router();

router.get('/categories', async (req, res) => {
  //  ручка для получения всех категорий и их процент прохожнения
  const user = req.session.user.id;
  try {
    const allQuestions = await Question.findAll();

    const categories = await Category.findAll({
      include: [{ model: Category, as: 'subcategories' }],
      include: [
        { model: Category, as: 'subcategories' },
        { model: Question, include: { model: Statistic, where: { userId: user } } },
      ],
    });

    const data = categories.map((el) => el.toJSON(), { depth: null });

    const finalData = data.map((el, index, array) => {
      if (el.Questions.length) {
        const i = el.themeId;

        let element = 0;

        for (let j = 0; j < el.length; j += 1) {
          if (i === el[j].themeId) {
            element = j;
          }
        }

        array[element].progress = Math.floor((el.Questions.length / allQuestions.length) * 100);
      }
      return el;
    });

    res.json(finalData);
  } catch (err) {
    console.log(err);
  }
});

router.post('/:id', async (req, res) => {
  // ручка для получения всех вопросов по клику на тему
  try {
    const { id } = req.params;

    const questions = await Question.findAll(
      { include: { model: Answer } },
      {
        where: { catId: id },
      },
    );

    res.json(questions);
  } catch (err) {
    console.log(err);
  }
});

router.post('question/:id', async (req, res) => {
  // ручка для получения вопроса и ответов
  try {
    const { id } = req.params;

    await Statistic.create({
      userId: req.session.user.id,
      qId: id,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/level', async (req, res) => {
  // ручка для получения уровня
  try {
    const questions = await Question.findAll();

    const user = req.session.user.id;

    const statistic = await Statistic.findAll({
      where: { userId: user },
    });

    const level = Math.floor((statistic.length / questions.length) * 100);

    console.log(level);

    res.json(level);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  // ручка для получения всех тем
  try {
    const { id } = req.params;
    const categories = await Category.findOne({
      include: [{ model: Category, as: 'subcategories' }],
      where: { id, themeId: null },
    });

    const themes = categories.subcategories.map((el) => el);

    res.json(themes);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
