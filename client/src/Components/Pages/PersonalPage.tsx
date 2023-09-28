import React, { useEffect, useState } from 'react';
import ModalEdit from './ModalEdit';
import { useAppSelector } from '../../Features/Redux/hooks/reduxHooks';
import { getImgs } from '../../Services/authService';

export default function PersonalPage(): JSX.Element {

const user = useAppSelector((store) => store.user);
 const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (): void => {
    setIsModalOpen(true);
  };
  const closeModal = (): void => {
    setIsModalOpen(false);
  };
  const handleSave = (): void => {
    // Обработка сохранения данных о пользователе
    closeModal();
  };
  console.log(user);



  
  return (
    <div className="w-3/4 ml-52 mt-28">
      <section className="flex flex-row border-b-2 border-gray-200 pb-8 md:flex-row md:gap-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-gray-400 text-3xl font-bold text-gray-400 md:h-44 md:w-44 md:text-7xl">
          <img style={{ height: '100%', borderRadius: '50%' }} src={`/images/${user.status === 'success' ? user.user.img : ''}.jpg`} alt="" />
        </div>
        <div className="flex grow flex-col justify-between gap-3">
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-2xl font-bold">{user.status === 'success' ? user.user.name : ''}</h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500"> {user.status === 'success' ? `Номер телефона:${user.user.phone}` :  ''}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500">{user.status === 'success' ? user.user.email : ''}</span>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={openModal}
          className="hidden items-center gap-2 self-start rounded-2xl border-b-4 border-blue-500 bg-blue-400 px-5 py-3 font-bold uppercase text-white transition hover:brightness-110 md:flex"
        >
          Изменить данные
        </button>
        {isModalOpen && <ModalEdit setIsModalOpen={setIsModalOpen} user ={user} closeModal={closeModal} />}
      </section>
      <section>
        <h2 className="mb-5 text-2xl font-bold">Статистика</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex gap-2 rounded-2xl border-2 border-gray-200 p-2 md:gap-3 md:px-6 md:py-4">
            ttt
            <div className="flex flex-col">
              <span>lll</span>
              <span className="text-sm text-gray-400 md:text-base">Day streak</span>
            </div>
          </div>
          <div className="flex gap-2 rounded-2xl border-2 border-gray-200 p-2 md:gap-3 md:px-6 md:py-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold">AAA</span>
              <span className="text-sm text-gray-400 md:text-base">Total XP</span>
            </div>
          </div>
          <div className="flex gap-2 rounded-2xl border-2 border-gray-200 p-2 md:gap-3 md:px-6 md:py-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold">EEE</span>
              <span className="text-sm text-gray-400 md:text-base">Current league</span>
            </div>
          </div>
          <div className="flex gap-2 rounded-2xl border-2 border-gray-200 p-2 md:gap-3 md:px-6 md:py-4">
            FFF
            <div className="flex flex-col">
              <span>CCC</span>
              <span className="text-sm text-gray-400 md:text-base">Top 3 finishes</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

