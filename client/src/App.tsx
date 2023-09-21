import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage';
import PersonalPage from './Components/Pages/PersonalPage';
import SignIn from './Components/Pages/SignIn';

function App(): JSX.Element {

  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/personal' element={<PersonalPage/>} />
      <Route path='/signin' element={<SignIn/>} />
    </Routes>
  );
}

export default App;
