/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
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
        themeId: 4,
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
        themeId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        catName: 'Методы массивов',
        themeId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('Questions', [
      {
        questions: 'Что любит Вазген? HTML',
        catId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
      },
      {
        questions: 'Что любит Лиза ? CSS',
        catId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
      },
      {
        questions: 'Что любит Мотя ? JS',
        catId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
      },
    ]);
    await queryInterface.bulkInsert(
      'Answers',
      [
        {
          answers: 'Что любит Вазгенh 1',
          isCorrect: true,
          qId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 'Что любит Kbasdfh 1',
          isCorrect: false,
          qId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 'Что любит МAdsfsотя 1',
          isCorrect: false,
          qId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 'Что любит МAdsfsотя 1',
          isCorrect: false,
          qId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          answers: 'Что любит Вазгенh 2',
          isCorrect: true,
          qId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 'Что любит Kbasdfh 2',
          isCorrect: false,
          qId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 'Что любит МAdsfsотя 2',
          isCorrect: false,
          qId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 'Что любит МAdsfsотя 2',
          isCorrect: false,
          qId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          answers: 'Что любит Вазгенh 3',
          isCorrect: true,
          qId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 'Что любит Kbasdfh 3',
          isCorrect: false,
          qId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 'Что любит МAdsfsотя 3',
          isCorrect: false,
          qId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 'Что любит МAdsfsотя 3',
          isCorrect: false,
          qId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Вазген',
        hashpass: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: '1@1.ru',
        phone: '1',
      },
    ]);

    await queryInterface.bulkInsert('Statistics', [
      {
        userId: 1,
        qId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        qId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
