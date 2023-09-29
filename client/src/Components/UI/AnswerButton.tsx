import React, { useState } from 'react';
import apiClient from '../../Services/apiConfig';

type ButtonProps = {
  answer: boolean;
};

export default function answerButton({ answer }: ButtonProps): JSX.Element {
  const [disable, setDisable] = useState(false);
  const [colorButton, setColorButton] = useState('');

  const sendAnswerHandler = async (answerId: number, qId: number): void => {
    const sendData = {
      answerId,
    };
    const response = await apiClient.post(`/game/answer/${qId}`, sendData);

    console.log(response.data);

    const status = response.data.filter((el) => el.id === answerId)[0].isCorrect;

    if (status) {
      setColorButton('game__button-true');
      setDisable(true);
    } else {
      setColorButton('game__button-false');
      setDisable(true);
    }
  };
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      disabled={disable}
      onClick={() => sendAnswerHandler(answer.id, answer.qId)}
      className={`game__button ${colorButton} rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-110`}
    >
      {answer?.answers}
    </button>
  );
}
