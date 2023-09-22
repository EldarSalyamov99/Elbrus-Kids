import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage';
import PersonalPage from './Components/Pages/PersonalPage';
<<<<<<< HEAD
import SignIn from './Components/Pages/SignIn';
=======
import SignUp from './Components/Pages/SignUp';
>>>>>>> b7bad8e42dad4e65c6b1c6ab497a27067ea70085

function App(): JSX.Element {

  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/personal' element={<PersonalPage/>} />
<<<<<<< HEAD
      <Route path='/signin' element={<SignIn/>} />
=======
      <Route path='/signup' element={<SignUp/>} />
>>>>>>> b7bad8e42dad4e65c6b1c6ab497a27067ea70085
    </Routes>
  );
}

export default App;
