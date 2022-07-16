import { configureStore } from '@reduxjs/toolkit';

import characters from './actions/characters';

export const reducer = {
  characters,
};

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
