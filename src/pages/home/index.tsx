import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CharacterCard from "../../components/Card";
import { ICharacterType } from "../../models/characters.model";

import './style.scss';

export default function Home() {
  const [characters, setCharacters] = useState<ICharacterType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStarWars = async () => {
      const response = await fetch(`${process.env.REACT_APP_STAR_WARS_API}/people`)
      const { results } = await response.json();

      setCharacters(results);
    }

    fetchStarWars();
  }, [])

  return (
    <main className="home">
      <div className="cards">
        {characters.map((character, i) => (
          <CharacterCard key={i} character={character} onClick={() => navigate(`/cardDetails/${character.mass}`)}/>
        ))}
      </div>
    </main>
  );
}
