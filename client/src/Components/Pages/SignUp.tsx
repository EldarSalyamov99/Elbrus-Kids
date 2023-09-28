import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import authHooks from '../../Features/Redux/hooks/authHooks';
import { getImgs } from '../../Services/authService';



export default function SignUp(): JSX.Element {
  const { signUpActionHandler } = authHooks();
  const [password2, setPassword2] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [selectedImg, setSelectedImg] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword2(e.target.value);
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedImg(e.target.value);
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

  const [arr, setArr] = useState<string[]>([]);
  useEffect(() => {
    getImgs()
      .then((data) => {
        setArr(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="absolute left-40 top-40 flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-gray-400 text-3xl font-bold text-gray-400 md:h-44 md:w-44 md:text-7xl">
        <img style={{ height: '100%', borderRadius: '50%' }} src={`/images/${selectedImg}.jpg`} alt="" />
      </div>
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
            <Form.Select
              name="img"
              className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
              size="lg"
              onChange={handleImgChange}
            >
              <option>Выбери картинку</option>
              {arr.map((item) => 
                <option onClick={() => setSelectedImg(item)} key={item.id}>{`${item.slice(0, -4)}`}</option>
                
              )}
            </Form.Select>
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
              placeholder="Повторите пароль"
              onChange={handlePasswordChange}
            />
          </div>
          {passwordError && <div className="text-red-500">{passwordError}</div>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="hidden items-center gap-2 self-start rounded-2xl border-b-4 border-blue-500 bg-blue-400 px-5 py-3 font-bold uppercase text-white transition hover:brightness-110 md:flex"
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
