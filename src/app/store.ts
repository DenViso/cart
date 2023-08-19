import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import cardReducer from '../features/cardsGet/cardSlice';

const logger = createLogger();

const store = configureStore({
  reducer: {
    card: cardReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;