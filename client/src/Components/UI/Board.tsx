import React, { useState } from 'react';
import type { CategoryType } from '../../Types/gameTypes';
import ModalThemes from './ModalThemes';
import { useAppDispatch, useAppSelector } from '../../Features/Redux/hooks/reduxHooks';
import { getThemesThunk } from '../../Features/Redux/thunks/gameThunk';

type CategoriesType = {
  Categories: CategoryType[];
};

export default function Board({ Categories }: CategoriesType): JSX.Element {
  const [show, setShow] = useState(false);
  const themes = useAppSelector((state) => state.themes);
  const dispatch = useAppDispatch();

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  const clickHandler = async (id: CategoryType['id']): Promise<void> => {
    const theme = await dispatch(getThemesThunk(id));
    handleShow();
  };

  return (
    <>
      <div className="board">
        {Categories.map((el, i) => (
          // eslint-disable-next-line react/button-has-type
          <button
            key={el.id}
            onClick={() => void clickHandler(el.id)}
            className={`categories ${
              i++ % 2 === 0 ? 'right' : 'left'
            } rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-110`}
            style={{ borderRadius: '100%' }}
          >
            <div style={{ visibility: 'visible' }} key={el.id}>
              <h1>{el.catName}</h1>
            </div>
          </button>
        )).reverse()}
      </div>
      <ModalThemes handleClose={handleClose} themes={themes} show={show} />
    </>
  );
}
