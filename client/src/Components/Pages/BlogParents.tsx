import React from 'react';
import Container from 'react-bootstrap/Container';
import ReactPlayer from 'react-player';

export default function ParentsPage(): JSX.Element {
  return (
    <Container
      style={{
        minWidth: '700px',
        margin: '0 auto',
        maxWidth: '1056px',
        paddingTop: '24px',
      }}
    >
      <h1
        style={{
          fontSize: '48px',
          margin: '0 0 25px 25px',
          color: 'rgb(33, 33, 33)',
        }}
      >
        Представляем Elbrus Kids – платформу для обучения программированию подростков
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 25px' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=sb3WjxQFulw&ab_channel=%D0%AD%D0%BB%D1%8C%D0%B1%D1%80%D1%83%D1%81%D0%91%D1%83%D1%82%D0%BA%D0%B5%D0%BC%D0%BF%3A%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F"
            style={{
              width: '1056px',
              margin: '25px 0 18px',
            }}
          />
        </div>
      </h1>
      
      <h2
        style={{
          color: 'rgb(33, 33, 33)',
          fontSize: '24px',
          lineHeight: '26px',
          margin: '0 0 25px',
        }}
      >
        Помощь подросткам в изучении программирования
      </h2>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
          src="image/raccon.png"
          alt="racoon"
          style={{ maxWidth: '250px', maxHeight: '230px' }}
        />
        <p
          style={{
            margin: '0 0 18px',
            color: 'rgb(119, 119, 119)',
            fontSize: '18px',
          }}
        >
          Elbrus Kids – это комплексная образовательная платформа, которая объединяет обучающие
          видео, интерактивные упражнения по программированию и функции отслеживания прогресса,
          чтобы создать увлекательный процесс обучения. Вот как Elbrus Kids может помочь вашему
          ребенку на пути к овладению программированием:
        </p>
      </div>
      <hr style={{ height: '5px', margin: '0 0 25px' }} />
      <h2
        style={{
          color: 'rgb(33, 33, 33)',
          fontSize: '24px',
          lineHeight: '26px',
          margin: '0 0 25px',
        }}
      >
        Интерактивные образовательные материалы
      </h2>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <p
          style={{
            margin: '0 0 18px',
            color: 'rgb(119, 119, 119)',
            fontSize: '18px',
          }}
        >
          Elbrus Kids предлагает обширную библиотеку образовательных видео, специально разработанных
          для подростков. Видео охватывают широкий спектр программных концепций – от основ
          программирования до более сложных тем, таких как веб-разработка. Каждое видео создано
          таким образом, чтобы быть увлекательным и понятным, обеспечивая мотивацию ребенка на
          протяжении всего процесса обучения.
        </p>
        <img
          src="image/bear.webp"
          alt="bear"
          style={{ maxWidth: '170px', maxHeight: '180px', marginLeft: '45px' }}
        />
      </div>
      <hr style={{ height: '5px', margin: '0 0 25px' }} />
      <h2
        style={{
          color: 'rgb(33, 33, 33)',
          fontSize: '24px',
          lineHeight: '26px',
          margin: '0 0 25px',
        }}
      >
        Практические упражнения по программированию
      </h2>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img src="image/fox.png" alt="fox" style={{ maxWidth: '230px', maxHeight: '300px' }} />
        <p
          style={{
            margin: '0 10px 18px',
            color: 'rgb(119, 119, 119)',
            fontSize: '18px',
          }}
        >
          Изучение программирования – это не только теория, но и практическое применение. Elbrus
          Kids предлагает интерактивные упражнения по программированию, которые позволяют вашему
          ребенку практиковаться и применять полученные знания. Эти упражнения предлагают
          практический подход к обучению, закрепляют концепции и развивают навыки решения задач.
        </p>
      </div>
      <hr style={{ height: '5px', margin: '0 0 25px' }} />
      <h2
        style={{
          color: 'rgb(33, 33, 33)',
          fontSize: '24px',
          lineHeight: '26px',
          margin: '0 0 25px',
        }}
      >
        Отслеживание прогресса
      </h2>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <p
          style={{
            margin: '0 0 18px',
            color: 'rgb(119, 119, 119)',
            fontSize: '18px',
          }}
        >
          Elbrus Kids понимает важность отслеживание прогресса для поддержания мотивации у
          студентов. Платформа предлагает систему комплексного отслеживания прогресса, которая
          позволяет вашему ребенку контролировать свой путь обучения. Они могут отслеживать
          завершенные видеоуроки, выполненные упражнения по программированию, а также получать
          значки и награды за свои достижения. Такой игровой подход помогает формировать чувство
          достижения и стимулирует постоянное обучение.
        </p>
        <img src="image/wolf.png" alt="wolf" style={{ width: '1250px' , height: '230px'}} />
      </div>
      <hr style={{ height: '5px', margin: '0 0 25px' }} />
      <h2
        style={{
          color: 'rgb(33, 33, 33)',
          fontSize: '24px',
          lineHeight: '26px',
          margin: '0 0 25px',
        }}
      >
        Изучение программирования с использованием Elbrus Kids предлагает множество преимуществ для
        вашего ребенка:
      </h2>
      <p
        style={{
          margin: '0 0 18px',
          color: 'rgb(119, 119, 119)',
          fontSize: '18px',
        }}
      >
        Будущие навыки: В современном цифровом мире навыки программирования являются востребованными
        во многих отраслях. Изучение программирования в юном возрасте дает вашему ребенку ценный
        набор навыков, открывающих двери к увлекательным карьерным возможностям в будущем.
      </p>
      <p
        style={{
          margin: '0 0 18px',
          color: 'rgb(119, 119, 119)',
          fontSize: '18px',
        }}
      >
        Критическое мышление и навыки решения проблем: Программирование требует логического мышления
        и умения решать проблемы. Благодаря выполнению упражнений и
      </p>
    </Container>
  );
}
