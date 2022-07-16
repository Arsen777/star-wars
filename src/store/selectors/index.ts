import { RootState } from "..";

export const getState = (store: RootState) => store;

export const getCharacters = (store: RootState) => getState(store).characters;

export const getCharacterById = (store: RootState, id: string) => getState(store).characters.find(character => character.mass === id);
