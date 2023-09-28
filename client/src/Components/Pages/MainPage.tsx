import React from 'react';
import ControlledCarousel from '../UI/Carusel';
import ButtomLearn from './ButtomLearn';
import ParentsBanner from './ParentsBanner';


export default function MainPage(): JSX.Element {
  return (
    <div>
      <ControlledCarousel />
      <ButtomLearn />
      <ParentsBanner />
    </div>
  );
}
