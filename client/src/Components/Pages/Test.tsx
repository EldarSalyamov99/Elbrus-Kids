import React, { useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Board from '../UI/Board';
import { useAppDispatch, useAppSelector } from '../../Features/Redux/hooks/reduxHooks';
import { getCategoriesThunk, getLevelThunk } from '../../Features/Redux/thunks/gameThunk';

export default function Test(): JSX.Element {
  const dispatch = useAppDispatch();
  const Categories = useAppSelector((state) => state.game);
  const level = useAppSelector((state) => state.level);

  useEffect(() => {
    void dispatch(getCategoriesThunk());
    void dispatch(getLevelThunk());
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url(/image/тропа2.jpg)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Board Categories={Categories} />;
    </div>
  );
}
