import React from 'react';
import { Link } from 'react-router-dom';


export default function ButtonLearn(): JSX.Element {
  return (
    <>
      <link href="style/assets/img/favicon.png" rel="icon" />
      <link href="style/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />

      {/* Vendor CSS Files */}
      <link href="style/assets/vendor/aos/aos.cjs.js" rel="stylesheet" />
      <link href="style/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link href="style/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
      <link href="style/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
      <link href="style/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
      <link href="style/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

      {/* Template Main CSS File */}
      <link href="style/assets/css/style.css" rel="stylesheet" />
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Изучай HTML, CSS и JS, играя на Elbrus Kids! </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
              <p>Наши увлекательные видеоуроки помогут
              подросткам освоить основы HTML, CSS и JS. Смотри видео, проходи тесты и учись
              программированию в игровой форме.</p>
              <p>

              Готов начать игру? Нажми кнопку прямо сейчас и прокачай свои навыки веб-разработки!
              </p>
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <Link
                    to="/course"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Учиться</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src="image/hero-img.png" className="img-fluid" alt="hero-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
