import React, { useState } from 'react';
import authHooks from '../../Features/Redux/hooks/authHooks';

export default function SignUp(): JSX.Element {
  const { signUpActionHandler } = authHooks();

  const [password2, setPassword2] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword2(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (password2 !== e.currentTarget.password.value) {
      setPasswordError('Пароли не совпадают');
    } else {
      setPasswordError('');
      signUpActionHandler(e).then((data) => data).catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex grow items-center justify-center">
      <div className="relative flex flex-col py-40 space-y-2 w-96">
        <div className="text-center text-3xl font-bold text-gray-800">Регистрация</div>
        <div className="flex justify-center">
          <input
            name="name"
            type="text"
            className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="Введите имя"
          />
        </div>
        <div className="flex justify-center">
          <input
            name="email"
            type="email"
            className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="Введите email"
          />
        </div>
        <div className="flex justify-center">
          <input
            name="phone"
            type="tel"
            className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="+7 (999) 999-99-99"
          />
        </div>
        <div className="flex justify-center">
          <input
            name="password"
            type="password"
            className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="Введите пароль"
          />
        </div>
        <div className="flex justify-center">
          <input
            name="password2"
            type="password"
            className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="Введите пароль повторно"
            onChange={handlePasswordChange}
          />
        </div>
        {passwordError && <div className="text-red-500">{passwordError}</div>}
        <button
          type="submit"
          className="rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-110"
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
}