import React from 'react';
import axios from 'axios';
import authHooks from '../../Features/Redux/hooks/authHooks';

export default function SingIn(): JSX.Element {
  const { signInActionHandler } = authHooks();

  return (
    <form
      
      onSubmit={(e) => void signInActionHandler(e)}
      className="flex grow items-center justify-center"
    >
      <div className="relative flex flex-col py-40  w-96">
        <div className="flex justify-center text-4xl">Войти</div>

        <div className="flex justify-center py-1">
          <input
            name="email"
            type="email"
            className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="Введите email"
          />
        </div>

        <div className="flex justify-center py-1">
          <input
            name="password"
            type="password"
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
    </form>
  );
}
