import { useAppDispatch,useAppSelector } from '../../app/hooks';

import { useEffect } from 'react';
import { fetchCard } from './cardSlice';
import { CircleChevronUpFill, CircleChevronDownFill, TrashCan } from 'akar-icons'

import { removeCard, increaseOne, decreaseOne,  } from './cardSlice';




export const CardViwe = () => {

  const cards = useAppSelector((state) => state.card)

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCard())
     
  }, [])



  return (
    <main>
      <div className="items">
        {cards.cards.map((card) => (
          <div className="item" key={card.id}>
            <div className="svg">
              <h2>{card.title}</h2>
              <img src={card.img} alt="image" />
            </div>
            <div className="item-amount">
              <b>{(card.price*card.amount).toFixed(2)}</b>
            </div>
            <div className="item-amount-btns">
              <CircleChevronUpFill onClick={() => dispatch(increaseOne(card.id))} className='item-amount-btns' size={36} />
              {card.amount}
              <CircleChevronDownFill
              onClick={() => dispatch(decreaseOne(card.id))}
                className='item-amount-btns' size={36} />
              <TrashCan onClick={() => dispatch(removeCard(card.id))} size={36} />
            </div>

          </div>

        ))}



      </div>

    </main>
  )
}
