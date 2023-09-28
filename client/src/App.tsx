import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage';
import PersonalPage from './Components/Pages/PersonalPage';


import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import PrivateRoute from './Components/PrivateRoute';
import { useAppDispatch, useAppSelector } from './Features/Redux/hooks/reduxHooks';
import Test from './Components/Pages/Test';
import Board from './Components/UI/Board';
import BlogParents from './Components/Pages/BlogParents';
import { userCheckActionThunk } from './Features/Redux/Actions/userAction';
import Layout from './Components/Layout';

function App(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

useEffect(()=>{
  void dispatch(userCheckActionThunk())
},[])

  return (

      <Routes>
        <Route element={<Layout user={user} />} >
        <Route path="/" element={<MainPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route element={<PrivateRoute isAllowed={user.status !== "success"} redirectTo="/" />} >
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/test" element={<Test />} />
        <Route path="/board" element={<Board />} />
        <Route path="/parents" element={<BlogParents />} />
        </Route>
      </Routes>
  )
}

export default App;
