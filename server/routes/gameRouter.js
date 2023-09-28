const express = require('express');
const {
  Category, Question, Answer, Statistic,
} = require('../db/models');

const router = express.Router();

router.get('/categories', async (req, res) => {
  //  ручка для получения всех категорий и их процент прохожнения
  try {
    const user = req.session.user.id;
    const allQuestions = await Question.findAll();

    const categories = await Category.findAll({
      include: [
        {
          model: Category,
          as: 'subcategories',
          include: {
            model: Question,
            include: { model: Statistic, where: { userId: user } },
          },
        },
        {
          model: Question,
        },
      ],
    });

    const data = categories
      .map((el) => el.toJSON(), { depth: null })
      .filter((item) => item.themeId === null);

    const finalData = data.map((el, index, array) => {
      el.progress = 0;
      el.subcategories.map((subcategories) => {
        if (subcategories.Questions.length) {
          const i = subcategories.themeId;

          let element = 0;

          for (let j = 0; j < el.length; j += 1) {
            if (i === el[j].themeId) {
              element = j;
            }
          }

          const allCat = array
            .map((el) => el.subcategories.filter((elem) => elem.themeId === i))
            .flat();

          const allCatQuest = [];

          for (let v = 0; v < allQuestions.length; v += 1) {
            for (let g = 0; g < allCat.length; g += 1) {
              if (allQuestions[v].catId === allCat[g]?.id) {
                allCatQuest.push(allQuestions[v]);
              }
            }
          }

          array[element].progress = Math.floor(
            (subcategories.Questions.length / allCatQuest.length) * 100,
          );
        }
      });
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
      include: [{ model: Category, as: 'subcategories' }],
      where: { id, themeId: null },
    });

    const themes = categories.subcategories.map((el) => el);

    res.json(themes);
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

  const user = req.session?.user?.id;

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

module.exports = router;
