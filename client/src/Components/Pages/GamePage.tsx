import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useAppDispatch, useAppSelector } from '../../Features/Redux/hooks/reduxHooks';
import { getQuestsThunk } from '../../Features/Redux/thunks/gameThunk';
import Buttons from '../UI/ButtonsList';

export default function GamePage(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const Quests = useAppSelector((state) => state.quests);
  const [count, setCount] = useState(0);

  const clickHandler = (): void => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
      if (count === Quests.length - 1) {
        navigate('/course');
      }
    }, 1);
  };

  useEffect(() => {
    void dispatch(getQuestsThunk(id));
  }, []);

  console.log(Quests);

  return (
    <div className="container game__page" style={{ backgroundColor: 'white' }}>
      <h1 className="game__title font-bold text-black">
        Посмотри данную лекцию и ответь на вопрос!
      </h1>
      <ReactPlayer url={Quests[count]?.video} />
      <h2 className="game__question font-bold uppercase text-black" style={{ fontSize: '20px' }}>
        {Quests[count]?.questions}
      </h2>
      <div className="game__answers" style={{ flexWrap: 'wrap' }}>
        <Buttons count={count} Quest={Quests[count]} clickHandler={clickHandler} />
      </div>
    </div>
  );
}
