import React, { useState } from 'react';
import ReactPlayer from 'react-player';

export default function PersonalPage(): JSX.Element {
  const [name, setName] = useState('Vazgen');
  const [lastName, setLastName] = useState('oG');
  const [phone, setPhone] = useState('8927272727');
  const [email, setEmail] = useState('lol.com');
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

  return (
    <>
    <div className="flex items-center gap-5 rounded-lg shadow-lg p-5 bg-blue-100 ">
      <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center">
        {/* Здесь может быть код для отображения фото пользователя */}
        <img src="vite.svg" alt="User Photo" className="w-20 h-20 rounded-full" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold text-blue-800">
          {name} {lastName}
        </h2>
        <p className="text-blue-600">{phone}</p>
        <p className="text-blue-600">{email}</p>
        <button type="button" className=" bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={openModal}>
          Изменить данные
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-xl font-bold text-blue-800 mb-5">Изменить данные</h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
                className="border border-gray-300 p-2 rounded-md"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Фамилия"
                className="border border-gray-300 p-2 rounded-md"
              />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Номер телефона"
                className="border border-gray-300 p-2 rounded-md"
              />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border border-gray-300 p-2 rounded-md"
              />
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                onClick={handleSave}
              >
                Сохранить
              </button>
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
                onClick={closeModal} >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    <div>
      <ReactPlayer url='https://youtu.be/gbDnzo_YLhQ?si=koJCktJE3-O5QLWj' controls/> 
    </div>
    </>
  );
}
