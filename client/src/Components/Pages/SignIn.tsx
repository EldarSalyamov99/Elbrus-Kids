import React from 'react';
import { Link } from 'react-router-dom';

export default function SingIn(): JSX.Element {


  return (
    <div className="flex grow items-center justify-center">
      <div className="relative flex flex-col py-40  w-96">
        <div className="flex justify-center text-4xl">Войти</div>

        <div className="flex justify-center py-1">
          <input
            type="email"
            className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="Введите email"
          />
        </div>
        <div className="flex justify-center py-1">
          <input
            type="tel"
            className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="+7 (999) 999-99-99"
          />
        </div>
        <div className="flex justify-center py-1">
          <input
            className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="Введите пароль"
          />
        </div>

        <button
          type="submit"
          className="rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-110"
        >
          Войти
        </button>
      </div>
    </div>
  );
}
