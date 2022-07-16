import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import { ICharacterType } from '../../models/characters.model';

const initialState: ICharacterType[] = [];

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      return action.payload;
    },
  },
});

const fetchCharacters = () => async (dispatch: AppDispatch) => {
  const response = await fetch(`${process.env.REACT_APP_STAR_WARS_API}/people`)
  const { results } = await response.json();

  dispatch(setCharacters(results));

  return response;
};


export { fetchCharacters };
export const { setCharacters } = characterSlice.actions;
export default characterSlice.reducer;
