import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage';
import PersonalPage from './Components/Pages/PersonalPage';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import PrivateRoute from './Components/PrivateRoute';
import { useAppDispatch, useAppSelector } from './Features/Redux/hooks/reduxHooks';
import Test from './Components/Pages/Test';
import { userCheckActionThunk } from './Features/Redux/Actions/userAction';
import Layout from './Components/Layout';
import GamePage from './Components/Pages/GamePage';
import ParentsPage from './Components/Pages/ParentsPage';
import Board from './Components/UI/Board';
import NavBarNew from './Components/UI/NavBar';

function App(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(userCheckActionThunk());
  }, []);

  return (
    <Routes>
      <Route element={<Layout user={user} />}>
        <Route path="/" element={<MainPage />} />

        <Route element={<PrivateRoute isAllowed={user.status !== "success"} redirectTo="/" />} >
        {/* <Route path="/personal" element={<PersonalPage />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/board" element={<Board />} />
        <Route path="/parents" element={<ParentsPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/course" element={<Test />} />
        <Route path="/courses/:id" element={<GamePage />} />
        <Route path="/testdesign" element={<NavBarNew />} />
      </Route>
    </Routes>
  );
}

export default App;
