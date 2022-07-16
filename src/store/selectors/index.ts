import { RootState } from "..";

export const getState = (store: RootState) => store;

export const getCharacters = (store: RootState) => getState(store).characters;
