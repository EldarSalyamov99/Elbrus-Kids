import React from 'react';
import type { QuestType } from '../../Types/gameTypes';
import AnswerButton from './AnswerButton';

type ButtonsProps = {
  count: number;
  Quest: QuestType[];
  clickHandler: (id: number) => void;
};

export default function Buttons({ Quest, count, clickHandler }: ButtonsProps): JSX.Element {
  console.log('Quest', Quest);
  return (
    <>
      {Quest?.Answers.map((answer) => <AnswerButton answer={answer} key={answer.id} />)}
      <button
        onClick={() => void clickHandler(Quest[count]?.id)}
        type="button"
        className="rounded-2xl border-b-4 border-green-500 bg-green-400 py-3 font-bold uppercase text-white transition hover:brightness-110"
        style={{ width: '150px' }}
      >
        Далее
      </button>
    </>
  );
}
