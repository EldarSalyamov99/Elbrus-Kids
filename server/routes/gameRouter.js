const express = require('express');
const { Category, Question, Answer, Statistic } = require('../db/models');
const question = require('../db/models/question');

const router = express.Router();

router.get('/', async (req, res) => {
  //  ручка для получения всех категорий и их процент прохожнения

  const user = 1;
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

    const finalData = data.map((el) => {
      console.log(el.Questions);
      if (el.Questions.length) {
        return {
          ...el,
          progress: Math.floor(
            (el.Questions.length / allQuestions.filter((q) => q.catId === el.id).length) * 100,
          ),
        };
      } else {
        return el;
      }
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

    const user = 1;

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

router.get('/catlevel', async (req, res) => {
  // ручка для получения уровня категории
  try {
    const user = 1;

    // const statistic = await Statistic.findAll({
    //   include: { model: Question },
    //   where: { userId: user },
    // });

    const statistic = await Category.findAll({
      include: [
        { model: Category, as: 'subcategories' },
        {
          model: Question,
          as: 'progress',
          include: { model: Statistic, where: { userId: user } },
        },
      ],
    });

    res.json(statistic);
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
