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
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} onClick={() => navigate(`/card-details/${index}`)}/> // The data has no id per object, that's why I should use index as a key
        ))}
      </div>
    </main>
  );
}
