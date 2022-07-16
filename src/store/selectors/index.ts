import { RootState } from "..";

export const getState = (store: RootState) => store;

export const getCharacters = (store: RootState) => getState(store).characters;

export const getCharacterById = (store: RootState, index: number) => getState(store).characters[index];
