import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CharacterCard from "../../components/Card";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCharacters } from "../../store/selectors";
import { fetchCharacters } from "../../store/actions/characters";

import './style.scss';

export default function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const characters = useAppSelector(getCharacters);

  useEffect(() => {
    if (!characters.length) {
      dispatch(fetchCharacters());
    }
  }, [characters, dispatch])

  return (
    <main className="home">
      <div className="cards">
        {characters.map((character, i) => (
          <CharacterCard key={i} character={character} onClick={() => navigate(`/card-details/${character.mass}`)}/>
        ))}
      </div>
    </main>
  );
}
