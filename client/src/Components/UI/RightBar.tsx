import React from 'react';

export default function RightBar(): JSX.Element {
  return (
    <div className="fixed bottom-0 right-0 top-0 hidden flex-col gap-5 border-l-2 border-[#e5e5e5] bg-white p-3 md:flex lg:w-64 lg:p-5">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Right bar</h1>

    </div>
  );
}