import React from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import type { AuthUserType } from '../Types/userTypes';
import NavBar from './UI/NavBar';

type LayoutProps = {
  user: AuthUserType;
};

export default function Layout({ user }: LayoutProps): JSX.Element {
  console.log(user.status);
  if (user.status === 'fetching') {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Spinner animation="border" role="status" variant="primary" style={{ width: '4rem', height: '4rem' }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}