import { useEffect, useState } from "react";
import MultiActionAreaCard from "../../components/Card";

import './style.scss';

export default function Home() {
  const [characters, setCharacters] = useState([]);

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
        {characters.map((el, i) => (
          <MultiActionAreaCard key={i}/>
        ))}
      </div>
    </main>
  );
}
