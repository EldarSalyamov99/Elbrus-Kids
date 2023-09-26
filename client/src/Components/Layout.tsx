import React from 'react'
import { Outlet } from 'react-router-dom';
import type { AuthUserType } from '../Types/userTypes';
import NavBar from './UI/NavBar';

type LayoutProps = {
    user:AuthUserType;
};
export default function Layout({user}:LayoutProps):JSX.Element {
  console.log(user.status);
    if(user.status === 'fetching') return <h1>Is Loading...</h1>
    
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}
