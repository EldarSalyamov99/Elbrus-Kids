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
        catName: 'Введение в HTML, списки и гиперссылки',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        catName: 'Таблицы и основы CSS',
        themeId: 1,
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
    ],
    {},
  );
  
    await queryInterface.bulkInsert('Questions', [
      {
        questions: 'Какой HTML-тег используется для создания таблицы?',
        catId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
      },
      {
        questions: 'Какой атрибут используется для объединения нескольких ячеек в одну в таблице?',
        catId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
      },
      {
        questions: 'Какой CSS-свойство используется для задания цвета фона ячейки таблицы?',
        catId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
      },
      {
        questions: 'Какой CSS-свойство используется для задания ширины границы ячейки таблицы?',
         catId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
      },
      {
        questions: 'Какой CSS-селектор используется для выбора всех ячеек таблицы?',
        catId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
      },
      {
        questions: 'Какая единица измерения используется для задания высоты строки таблицы?',
         catId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
      },
      {
        questions: 'Какой CSS-свойство используется для выравнивания текста в ячейке таблицы по горизонтали?',
        catId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
      },
      {
        questions: 'Какой HTML-тег используется для создания заголовка таблицы?',
         catId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
      },
      {
        questions: 'Какой CSS-свойство используется для задания отступов внутри ячейки таблицы?',
         catId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
      },
      {
        questions: 'Какой атрибут используется для задания границы таблицы?',
         catId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
      }, 
      await queryInterface.bulkInsert('Questions', [
        {
          questions: 'Какой HTML-тег используется для создания таблицы?',
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
        },
        {
          questions: 'Какой атрибут используется для объединения нескольких ячеек в одну в таблице?',
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
        },
        {
          questions: 'Какой CSS-свойство используется для задания цвета фона ячейки таблицы?',
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
        },
        {
          questions: 'Какой CSS-свойство используется для задания ширины границы ячейки таблицы?',
           catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
        },
        {
          questions: 'Какой CSS-селектор используется для выбора всех ячеек таблицы?',
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
        },
        {
          questions: 'Какая единица измерения используется для задания высоты строки таблицы?',
           catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
        },
        {
          questions: 'Какой CSS-свойство используется для выравнивания текста в ячейке таблицы по горизонтали?',
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
        },
        {
          questions: 'Какой HTML-тег используется для создания заголовка таблицы?',
           catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
        },
        {
          questions: 'Какой CSS-свойство используется для задания отступов внутри ячейки таблицы?',
           catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
        },
        {
          questions: 'Какой атрибут используется для задания границы таблицы?',
           catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          video: 'https://www.youtube.com/watch?v=8bp5nCL7Uu0',
        }, 
           {
            questions: 'Какое расширение имеют файлы HTML?',
            catId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
            video: 'https://www.youtube.com/watch?v=lEt1JS0e8h4&ab_channel=%D0%9F%D0%B8%D0%BA%D1%81%D0%B5%D0%BB%D1%8C-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%D0%B4%D0%BB%D1%8F%D0%B4%D0%B5%D1%82%D0%B5%D0%B9',
           },
           {
            questions: 'Какой тег используется для создания заголовка первого уровня?',
            catId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
            video: 'https://www.youtube.com/watch?v=lEt1JS0e8h4&ab_channel=%D0%9F%D0%B8%D0%BA%D1%81%D0%B5%D0%BB%D1%8C-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%D0%B4%D0%BB%D1%8F%D0%B4%D0%B5%D1%82%D0%B5%D0%B9',
           },
           {
            questions: 'Какой тег используется для создания ссылки?',
            catId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
              video: 'https://www.youtube.com/watch?v=lEt1JS0e8h4&ab_channel=%D0%9F%D0%B8%D0%BA%D1%81%D0%B5%D0%BB%D1%8C-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%D0%B4%D0%BB%D1%8F%D0%B4%D0%B5%D1%82%D0%B5%D0%B9',
           },
           {
            questions: 'Какой тег используется для создания списка с маркированными пунктами?',
            catId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
              video: 'https://www.youtube.com/watch?v=lEt1JS0e8h4&ab_channel=%D0%9F%D0%B8%D0%BA%D1%81%D0%B5%D0%BB%D1%8C-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%D0%B4%D0%BB%D1%8F%D0%B4%D0%B5%D1%82%D0%B5%D0%B9',
           },
           {
            questions: 'Какой тег используется для создания таблицы?',
            catId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
              video: 'https://www.youtube.com/watch?v=lEt1JS0e8h4&ab_channel=%D0%9F%D0%B8%D0%BA%D1%81%D0%B5%D0%BB%D1%8C-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%D0%B4%D0%BB%D1%8F%D0%B4%D0%B5%D1%82%D0%B5%D0%B9',
           },
           {
            questions: 'Какой тег используется для вставки изображения?',
            catId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
              video: 'https://www.youtube.com/watch?v=lEt1JS0e8h4&ab_channel=%D0%9F%D0%B8%D0%BA%D1%81%D0%B5%D0%BB%D1%8C-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%D0%B4%D0%BB%D1%8F%D0%B4%D0%B5%D1%82%D0%B5%D0%B9',
           },
           {
            questions: 'Какой тег используется для создания абзаца текста?',
            catId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
              video: 'https://www.youtube.com/watch?v=lEt1JS0e8h4&ab_channel=%D0%9F%D0%B8%D0%BA%D1%81%D0%B5%D0%BB%D1%8C-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%D0%B4%D0%BB%D1%8F%D0%B4%D0%B5%D1%82%D0%B5%D0%B9',
           },
           {
            questions: 'Какой тег используется для выделения жирного текста?',
            catId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
              video: 'https://www.youtube.com/watch?v=lEt1JS0e8h4&ab_channel=%D0%9F%D0%B8%D0%BA%D1%81%D0%B5%D0%BB%D1%8C-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%D0%B4%D0%BB%D1%8F%D0%B4%D0%B5%D1%82%D0%B5%D0%B9',
           },
           {
            questions: 'Какой тег используется для создания формы ввода текста?',
            catId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
              video: 'https://www.youtube.com/watch?v=lEt1JS0e8h4&ab_channel=%D0%9F%D0%B8%D0%BA%D1%81%D0%B5%D0%BB%D1%8C-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%D0%B4%D0%BB%D1%8F%D0%B4%D0%B5%D1%82%D0%B5%D0%B9',
           },
           {
            questions: 'Какой тег используется для создания кнопки?',
            catId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
              video: 'https://www.youtube.com/watch?v=lEt1JS0e8h4&ab_channel=%D0%9F%D0%B8%D0%BA%D1%81%D0%B5%D0%BB%D1%8C-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%D0%B4%D0%BB%D1%8F%D0%B4%D0%B5%D1%82%D0%B5%D0%B9',
            },
          ],
          {},
        );
        
        
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
