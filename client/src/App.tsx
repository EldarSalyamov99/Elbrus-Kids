import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage';
import PersonalPage from './Components/Pages/PersonalPage';
import LeftBar from './Components/UI/LeftBar';
import RightBar from './Components/UI/RightBar';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import PrivateRoute from './Components/PrivateRoute';
import { useAppSelector } from './Features/Redux/hooks/reduxHooks';

function App(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  return (
    <>
      <LeftBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route element={<PrivateRoute isAllowed={user.status !== "success"} redirectTo="/" />} >
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
      <RightBar />
    </>
  );
}

export default App;
