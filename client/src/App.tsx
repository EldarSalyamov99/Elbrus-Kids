import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage';
import PersonalPage from './Components/Pages/PersonalPage';

function App(): JSX.Element {

  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/personal' element={<PersonalPage/>} />
    </Routes>
  );
}

export default App;
