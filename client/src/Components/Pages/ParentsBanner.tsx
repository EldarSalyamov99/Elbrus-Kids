import React from 'react';
import { Link } from 'react-router-dom';

export default function ParentsBanner(): JSX.Element {
  return (
    <>
      <link href="client/style/assets/img/favicon.png" rel="icon" />
      <link href="client/style/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />

      {/* Vendor CSS Files */}
      <link href="client/style/assets/vendor/aos/aos.css" rel="stylesheet" />
      <link href="client/style/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link
        href="client/style/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link href="client/style/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
      <link href="client/style/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
      <link href="client/style/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

      {/* Template Main CSS File */}
      <link href="style/assets/css/style.css" rel="stylesheet" />

      {/* About Section */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="style/assets/img/features-2.png" className="img-fluid" alt="" />
            </div>

            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="content">
                <h3>Как помочь ребенку?</h3>
                <h2>
                  Подарите вашим детям возможность изучить HTML, CSS и JS, играя на Elbrus Kids!
                </h2>
                <p>
                  Наши увлекательные видеоуроки помогут подросткам освоить основы веб-разработки.
                  Смотри видео, проходи тесты и проверяй свои знания в игровой форме. Дайте им шанс
                  развить важные навыки программирования и открыть двери к технологическому
                  будущему.
                </p>
                <div className="text-center text-lg-start">
                  <Link
                    to="/parents"
                    className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Читать дальше</span>
                    <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
