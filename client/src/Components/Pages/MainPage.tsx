import React from 'react';
import ControlledCarousel from '../UI/Carusel';
<<<<<<< HEAD
import ButtomLearn from './ButtomLearn';
import ParentsBanner from './ParentsBanner';
=======
import CardCourse from '../UI/CardCourse';
>>>>>>> dev

export default function MainPage(): JSX.Element {
  return (
    <div>
      <ControlledCarousel />
<<<<<<< HEAD
      <ButtomLearn />
      <ParentsBanner />
    </div>
=======
      <div style={{ background: 'linear-gradient(to bottom right, #ffffff, #ccccff)' }}>
        <h1 style={{ marginTop: '20px', marginLeft: '300px', fontFamily: 'Roboto, sans-serif' }}>
          Программа
        </h1>
        <div className="d-flex justify-content-center mt-3">
          {themes.map((theme) => (
            <CardCourse key={theme} theme={theme} />
          ))}
        </div>
      </div>
    </>
>>>>>>> dev
  );
}
