import React from 'react';
import ControlledCarousel from '../UI/Carusel';
import CorseBanner from '../UI/CorseBanner';
import ParentsBaner from '../UI/ParentsBaner';

export default function MainPage(): JSX.Element {
  const themes = ['HTML', 'CSS', 'JavaScript', 'React'];

  return (
    <>
      <ControlledCarousel />
      <CorseBanner />
      <ParentsBaner/>
    </>
  );
}