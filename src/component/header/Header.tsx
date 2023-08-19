import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { Cart } from 'akar-icons'
import { calculateCart } from '../../features/cardsGet/cardSlice'
import { useEffect } from 'react';

export const Header = () => {
  const cards = useAppSelector((state) => state.card)  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(calculateCart())
  })
  return (
    <header>
      <div className="cart">
        <h2>Cart </h2>

      </div>
      <div className="header-cart-count">
        <Cart strokeWidth={2} size={36} />
        <span className="cart-count">{cards.amount}</span>
      
        
      </div>
    </header>
  )
}
