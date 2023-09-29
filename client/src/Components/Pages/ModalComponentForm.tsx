import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import type { AuthUserType } from '../../Types/userTypes';
import authHooks from '../../Features/Redux/hooks/authHooks';
import { getImgs } from '../../Services/authService';

type ModalComponentFormProps = {
  user: AuthUserType;
  closeModal: () => void;
};
export default function ModalComponentForm({
  user,
  closeModal,
}: ModalComponentFormProps): JSX.Element {
  console.log(user);

  const { updateUserActionHandler } = authHooks();

  const updateUser = (e: React.FormEvent<HTMLFormElement>): void => {
    void updateUserActionHandler(e);
    closeModal();
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedImg(e.target.value);
  };
  const [selectedImg, setSelectedImg] = useState('');
  const [arr, setArr] = useState<string[]>([]);
  useEffect(() => {
    getImgs()
      .then((data) => {
        setArr(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Form className="w-96" onSubmit={updateUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-lg">Имя</Form.Label>
        <Form.Control
          className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
          name="name"
          type="text"
          placeholder="name"
          defaultValue={user.status === 'success' ? user.user.name : ''}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-lg">Номер телефона</Form.Label>
        <Form.Control
          className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
          name="phone"
          type="text"
          placeholder="Phone"
          defaultValue={user.status === 'success' ? user.user.phone : ''}
        />
      </Form.Group>
      <div className="flex justify-center">
        <Form.Select
          name="img"
          className="grow rounded-2xl border-2  border-gray-200 bg-gray-50 px-4 py-3"
          size="lg"
          onChange={handleImgChange}
        >
          <option>Выбери картинку</option>
          {arr.map((item) => (
            <option onClick={() => setSelectedImg(item)} key={item.id}>{`${item.slice(
              0,
              -4,
            )}`}</option>
          ))}
        </Form.Select>
      </div>

      <button
        type="submit"
        className=" w-full border-b-4 border-blue-500 bg-blue-400 px-5 py-3 font-bold uppercase  text-white transition hover:brightness-110"
      >
        Сохранить данные
      </button>
    </Form>
  );
}
