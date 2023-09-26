import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm, Controller } from 'react-hook-form';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import authHooks from '../../Features/Redux/hooks/authHooks';
import type { UserFormType } from '../../Types/userTypes';

export default function SignUp(): JSX.Element {
  const { register, handleSubmit, control, formState } = useForm<UserFormType>();

  const { signUpActionHandler } = authHooks();

  const onSubmit: SubmitHandler<UserFormType> = (data) => {
    signUpActionHandler(data).catch((err) => {
      console.log(err);
    });
  };

  return (
    <form onSubmit={void handleSubmit(onSubmit)} className="flex grow items-center justify-center">
      <div className="relative flex flex-col py-40 space-y-2 w-96">
        <div className="text-center text-3xl font-bold text-gray-800">Регистрация</div>
        <div className="flex justify-center">
          <input
            {...register('name', { required: true })}
            name="name"
            type="text"
            className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="Введите имя"
          />
        </div>
        <div className="flex justify-center">
          <input
            {...register('email', { required: true })}
            name="email"
            type="email"
            className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="Введите email"
          />
        </div>
        <div className="flex justify-center">
          <Controller
            control={control}
            name="phone"
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country="RU"
                areaCodes={{ RU: ['+7'] }}
                type="tel"
                className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
                placeholder="Введите номер телефона"
                masks={{ RU: '+7(9..) ..-..-..' }}
              />
            )}
          />
        </div>
        <div className="flex justify-center">
          <input
            {...register('password', { required: true })}
            name="password"
            type="password"
            className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="Введите пароль"
          />
        </div>
        <div className="flex justify-center">
          <input
            name="password2"
            type="password"
            className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="Введите пароль повторно"
          />
        </div>
        <button
          type="submit"
          disabled={!formState.isValid}
          className="rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-110"
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
}

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

// export default function SignUp() {
//   const { register, handleSubmit } = useForm();
//   const [data, setData] = useState('');

//   return (
//     <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
//       <input {...register('firstName')} placeholder="First name" />
//       <select {...register('category', { required: true })}>
//         <option value="">Select...</option>
//         <option value="A">Option A</option>
//         <option value="B">Option B</option>
//       </select>
//       <textarea {...register('aboutYou')} placeholder="About you" />
//       <p>{data}</p>
//       <input type="submit" />
//     </form>
//   );
// }
