import React from 'react';
import ControlledCarousel from '../UI/Carusel';
import ButtomLearn from './ButtomLearn';
import ParentsBanner from './ParentsBanner';
import CardCourse from '../UI/CardCourse';


export default function MainPage(): JSX.Element {
  return (
    <div>
      <ControlledCarousel />
      <ButtomLearn />
      <ParentsBanner />
    </div>

  );
}
