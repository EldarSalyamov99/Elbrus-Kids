/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      catName: 'HTML',
      themeId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      catName: 'Атрибуты',
      themeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      catName: 'Селекторы',
      themeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      catName: 'CSS',
      themeId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      catName: 'Псевдоэлементы',
      themeId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      catName: 'Flex',
      themeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      catName: 'JavaScript',
      themeId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      catName: 'Классы',
      themeId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      catName: 'Методы массивов',
      themeId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
    await queryInterface.bulkInsert('Questions', [{
      questions: 'Что любит Вазген? HTML',
      catId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      questions: 'Что любит Лиза ? CSS',
      catId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      questions: 'Что любит Мотя ? JS',
      catId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
    await queryInterface.bulkInsert(
      'Answers',
      [{
        answers: 'Что любит Вазгенh HTML',
        isCorrect: true,
        qId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Что любит Kbasdfh HTML',
        isCorrect: true,
        qId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answers: 'Что любит МAdsfsотя JS',
        isCorrect: true,
        qId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
