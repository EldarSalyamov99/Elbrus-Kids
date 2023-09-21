import React from 'react'

export default function SignUp():JSX.Element {
  return (
    <div className="flex grow items-center justify-center">
        <div className="relative flex flex-col py-40 space-y-2  w-96" >
            <div className='text-center text-3xl font-bold text-gray-800'>Регистрация</div>
                <div className='flex justify-center'>
                    <input type='text' className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
                    placeholder='Введите имя'
                    />
                </div>
                <div className='flex justify-center'>
                    <input type='email' className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
                    placeholder='Введите email'
                    />
                </div>
                <div className='flex justify-center'>
                    <input type='tel' className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
                    placeholder='+7 (999) 999-99-99'
                    />
                </div>
                <div className='flex justify-center'>
                    <input className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
                    placeholder='Введите пароль'
                    />
                </div>
                <div className='flex justify-center'>
                    <input className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
                    placeholder='Введите пароль повторно'
                    />
                </div>
                <button type='submit' className='rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-110 '>
                    Зарегистрироваться
                </button>
            </div>
            </div>
    
  )
}
