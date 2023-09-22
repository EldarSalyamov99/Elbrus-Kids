import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage';
import PersonalPage from './Components/Pages/PersonalPage';
import LeftBar from './Components/UI/LeftBar';
import RightBar from './Components/UI/RightBar';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';

function App(): JSX.Element {

  return (
    <>
    <LeftBar/>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/personal' element={<PersonalPage/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    <RightBar/>
    </>
  );
}

export default App;
