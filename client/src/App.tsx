import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage';
import PersonalPage from './Components/Pages/PersonalPage';
import NavBar from './Components/UI/NavBar';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import PrivateRoute from './Components/PrivateRoute';
import { useAppSelector } from './Features/Redux/hooks/reduxHooks';
import Test from './Components/Pages/Test';
import Board from './Components/UI/Board';

function App(): JSX.Element {
  const user = useAppSelector((state) => state.user);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route element={<PrivateRoute isAllowed={user.status !== "success"} redirectTo="/" />} >
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
        <Route path="/board" element={<Board />} />
        </Route>
      </Routes>

</>
)
}

export default App;
