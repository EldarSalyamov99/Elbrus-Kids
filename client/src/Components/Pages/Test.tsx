import React from 'react'
import { Link } from 'react-router-dom'

export default function Test(): JSX.Element {
  return (
    <main
    className="flex min-h-screen flex-col items-center justify-center bg-[#235390] text-white"
    // style={{ backgroundImage: `url(${bgSnow.src})` }}
  >
    <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
      {/* <GlobeSvg className="h-fit w-7/12 md:w-[360px]" /> */}
      <div>
        <p className="mb-6 max-w-[600px] text-center text-3xl font-bold md:mb-12">
        Бесплатный, веселый и эффективный способ выучить Основы JavaScript!
        </p>
        <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
          <Link
            to="/register"
            className="w-full rounded-2xl border-b-4 border-green-700 bg-green-600 px-10 py-3 text-center font-bold uppercase transition hover:border-green-600 hover:bg-green-500 md:min-w-[320px]"
          >
            Начать!
          </Link>
          <button
            className="w-full rounded-2xl border-2 border-b-4 border-[#042c60] bg-[#235390] px-8 py-3 font-bold uppercase transition hover:bg-[#204b82] md:min-w-[320px]"
            type='button'
          >
            У меня уже есть аккаунт
          </button>
        </div>
      </div>
    </div>
  </main>
  )
}
