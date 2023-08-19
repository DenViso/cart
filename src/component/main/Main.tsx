import { TrashCan } from "akar-icons"
import { CardViwe } from "../../features/cardsGet/CardViwe"
import { clearCart } from "../../features/cardsGet/cardSlice"
import { useAppDispatch, useAppSelector} from "../../app/hooks"


export const Main = () => {

  const cards = useAppSelector((state) => state.card)
  const dispatch = useAppDispatch();

  return (
    <>
      <CardViwe />
      <div className="total">
        <h2>Total price </h2>
        <b>
          {cards.cards.reduce((acc, card) => acc + card.price * card.amount, 0).toFixed(2)}
          </b>
        <TrashCan onClick={() => dispatch(clearCart())} size={36} />
      </div>
    </>
  )
}

