import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import type { CategoryType } from '../../Types/gameTypes';



type CategoriesType = {
  Categories: CategoryType[];
};

export default function Board({ Categories }: CategoriesType): JSX.Element {
  return (
    <div className="board">
      {Categories.filter((category) => category.themeId === null)
        .map((el, i) => (
          <div key={el.id} className={`categories ${i++ % 2 === 0 ? 'right' : 'left'}`}>
            <Link to={`api/game/${el.id}`}>
              <CircularProgressbar
                value={el.progress === undefined ? 0 : el.progress}
                text={el.catName}
                styles={buildStyles({ pathColor: '#32CD32', textColor: '#000000A6' })}
              />
            </Link>
          </div>
        ))
        .reverse()}
    </div>
  );
}

