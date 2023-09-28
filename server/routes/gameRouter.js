const express = require('express');
const { Category, Question, Answer, Statistic } = require('../db/models');
const { where, Op } = require('sequelize');

const router = express.Router();

router.get('/categories', async (req, res) => {
  //  ручка для получения всех категорий и их процент прохожнения
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Category,
          as: 'subcategories',
        },
      ],
      where: { themeId: null },
    });

    res.json(categories);
  } catch (err) {
    console.log(err);
  }
});

router.post('/:id', async (req, res) => {
  // ручка для получения всех вопросов по клику на тему
  try {
    const { id } = req.params;
    const user = req.session?.user?.id;
    const questions = await Category.findAll({
      include: [
        {
          model: Question,
          attributes: ['id', 'questions', 'catId', 'video'],
          include: {
            model: Answer,
            attributes: ['id', 'answers', 'qId'],
          },
        },
      ],
      where: { id },
    });

    const newQuestions = questions.map((el) => el.toJSON(), { depth: null })[0].Questions;

    const statistic = await Statistic.findAll({
      where: { userId: user },
    });

    const newStatic = statistic.map((el) => el.toJSON(), { depth: null });

    const result = newQuestions.filter(
      (question) => !newStatic.some((result) => result.qId === question.id),
    );

    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.get('/question/:id', async (req, res) => {
  // ручка для получения вопроса и ответов
  try {
    const { id } = req.params;

    await Statistic.create({
      userId: req.session.user.id,
      qId: id,
    });

    const idQuestion = await Question.findOne({
      where: { id },
    });

    const idTheme = await Category.findOne({
      where: { id: idQuestion.catId },
    });

    const idCategory = await Category.findOne({
      where: { id: idTheme.themeId },
    });

    res.json(idCategory.id);
  } catch (err) {
    console.log(err);
  }
});

router.get('/level', async (req, res) => {
  // ручка для получения уровня
  try {
    const questions = await Question.findAll();

    const user = req.session?.user?.id;

    const statistic = await Statistic.findAll({
      where: { userId: user },
    });

    const level = Math.floor((statistic.length / questions.length) * 100);

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
      include: [
        {
          model: Category,
          as: 'subcategories',
          include: {
            model: Question,
            include: { model: Statistic, where: { userId: req.session.user.id } },
          },
        },
      ],
      where: { id, themeId: null },
    });

    const themes = categories.subcategories
      .map((el) => el.toJSON(), { depth: null })
      .map((el) => el);

    const allQuestsCat = await Category.findOne({
      include: [
        {
          model: Category,
          as: 'subcategories',
          include: {
            model: Question,
          },
        },
      ],
      where: { id, themeId: null },
    });

    const newQuestCat = allQuestsCat.subcategories.map((el) => el.toJSON(), { depth: null });

    const result = themes.map((el, index) => {
      if (el.Questions.length !== newQuestCat[index].Questions.length) {
        return false;
      } else {
        return true;
      }
    });

    const twoResult = themes.map((el, index) => ({ ...el, progress: result[index] }));

    console.log(twoResult);

    res.json(twoResult);
  } catch (err) {
    console.log(err);
  }
});

router.post('/answer/:qId', async (req, res) => {
  const { qId } = req.params;
  const { answerId } = req.body;

  const answer = await Answer.findAll({
    where: { qId },
  });

  const status = answer.filter((el) => el.id === answerId)[0].isCorrect;

  const user = req.session.user.id;

  const [static, created] = await Statistic.findOrCreate({
    where: { userId: user, qId },
    defaults: { status },
  });

  if (created) {
    res.json(answer);
  } else {
    res.status(400).json({ message: 'fucking hacking' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const questionsAll = await Category.findOne({
      include: {
        model: Question,
      },
      where: { id },
    });

    const idQuest = questionsAll.Questions.map((el) => el.id);

    await Statistic.destroy({
      where: { qId: idQuest, userId: req.session?.user?.id },
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
