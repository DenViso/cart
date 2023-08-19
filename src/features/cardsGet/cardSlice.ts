import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type Card = {
  id: string,
  title: string,
  price: number,
  img: string,
  amount: number,
 
}
type InitialState = {
  loading: boolean;
  cards: Card[];
  error: string;
}

const initialState: InitialState = {
  loading: false,
  cards: [],
  error: '',
}

const CardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cards = [];
    },
    removeCard: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload)
    },
    increaseOne: (state, action: PayloadAction<string>) => {
      const card = state.cards.find((card) => card.id === action.payload)
      if (card) card.amount++
    },
    decreaseOne: (state, action: PayloadAction<string>) => {
      const card = state.cards.find((card) => card.id === action.payload)
      if (card) card.amount--
      if (card.amount === 0) {
        state.cards = state.cards.filter((card) => card.id !== action.payload)
      }
    },
    calculateCart: (state) => {
      let total = 0;
      let amount = 0;
      state.cards.forEach((item) => {
        total += item.price * item.amount;
        amount += item.amount;
      });
      state.amount = amount;
      state.total = total;
    }
   
    },


    extraReducers: (builder) => {
      builder.addCase(fetchCard.pending, (state) => {
        state.loading = true
      }),
      builder.addCase(fetchCard.fulfilled, (state, action) => {
        state.loading = false
        state.cards = action.payload
      }),
      builder.addCase(fetchCard.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'

      })
    }
 
})


export const fetchCard = createAsyncThunk(
  'card/fetchCard', () => {
    return axios
      .get('https://course-api.com/react-useReducer-cart-project')
      .then((res) => res.data)
  }
)


export const { clearCart, removeCard, increaseOne,decreaseOne, calculateCart } = CardSlice.actions
export default CardSlice.reducer
