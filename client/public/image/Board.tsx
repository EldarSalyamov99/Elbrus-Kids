import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import type { CategoryType } from '../../Types/gameTypes';

type CategoriesType = {
  Categories: CategoryType[];
};

export default function Board({ Categories }: CategoriesType): JSX.Element {
  return (
    <div className="container board">
      {Categories.filter((category) => category.themeId === null).map((el) => (
        <div key={el.id} className="categoryes">
          <Link to={`api/game/${el.id}`}>
            <CircularProgressbar
              value={el.progress === undefined ? 0 : el.progress}
              text={el.catName}
              styles={buildStyles({ pathColor: '#32CD32' })}
            />
            <img src={`images/${el.id}.png`} alt="" />
          </Link>
        </div>
      ))}
    </div>
  );
}
