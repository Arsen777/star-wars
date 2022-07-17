import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

import CharacterCard from '../../components/Card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCharacters } from '../../store/selectors';
import { fetchCharacters } from '../../store/actions/characters';

import './style.scss';

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const characters = useAppSelector(getCharacters);

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!characters.length) {
      dispatch(fetchCharacters());
    }
  }, [characters, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const filteredCharacters = useMemo(
    () =>
      characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      ),
    [characters, search]
  );

  return (
    <main className="home">
      <div className="search-field">
        <TextField
          type="search"
          value={search}
          variant="outlined"
          label="Search field"
          onChange={handleChange}
        />
      </div>
      <div className="cards">
        {filteredCharacters.map((character, index) => (
          <CharacterCard
            key={index}
            character={character}
            onClick={() => navigate(`/card-details/${index}`)}
          /> // The data has no id per object, that's why I should use index as a key
        ))}
      </div>
    </main>
  );
}
