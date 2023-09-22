import React from 'react';
import { Link } from 'react-router-dom';

export default function LeftBar(): JSX.Element {
  return (

    <nav className="fixed bottom-0 left-0 top-0 hidden flex-col gap-5 border-r-2 border-[#e5e5e5] bg-white p-3 md:flex lg:w-64 lg:p-5">
        <h1 className="mb-5 ml-5 mt-5 hidden text-3xl font-bold text-blue-500 lg:block">Elbrus-Kids</h1>
        <ul className="flex flex-col items-stretch gap-3">
          <li className='flex flex-1'>
            <Link to="/" className="text-2xl font-bold text-blue-500 font-kids">
              Домой
            </Link>
          </li>
          <li>
            <Link to="/signin" className="text-2xl font-bold text-blue-500 font-kids">
              Авторизация
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-2xl font-bold text-blue-500 font-kids">
              Регистрация
            </Link>
          </li>
          <li>
            <Link to="/personal" className="text-2xl font-bold text-blue-500 font-kids">
              Профиль
            </Link>
          </li>
        </ul>
      </nav>

  );
}