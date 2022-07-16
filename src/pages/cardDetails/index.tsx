import { Typography } from "@mui/material";
import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchCharacters } from "../../store/actions/characters";
import { getCharacterById, getCharacters } from "../../store/selectors";

import './style.scss';

function CardDetails() {
  const { cardId = '' } = useParams();
  const dispatch = useAppDispatch();
  const characters = useAppSelector(getCharacters);
  const character = useAppSelector(store => getCharacterById(store, cardId));

  useEffect(() => {
      if (!characters.length) {
        dispatch(fetchCharacters());
      }
  }, [characters, dispatch])

  return (
    <div className="card-details">
      <h2>Card details</h2>
      <Typography variant="body2" color="text.secondary">
        <p>gender - {character?.gender}</p>
        <p>hair color - {character?.hair_color}</p>
        <p>skin color - {character?.skin_color}</p>
        <p>eye color - {character?.eye_color}</p>
        <p>skin color - {character?.skin_color}</p>
        <p>height - {character?.height}</p>
      </Typography>
    </div>
  );
}

export default memo(CardDetails);