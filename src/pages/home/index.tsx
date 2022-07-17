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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const requestCharacters = async () => {
      if (!characters.length) {
        setIsLoading(true);
  
        await dispatch(fetchCharacters());
  
        setIsLoading(false);
      }
    }

    requestCharacters();
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

  if (isLoading) {
    return <p>... loading data</p>
  }

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
        {filteredCharacters.length ? (
          filteredCharacters.map((character, index) => (
            <CharacterCard
              key={index}
              character={character}
              onClick={() => navigate(`/card-details/${index}`)}
            /> // The data has no id per object, that's why I should use index as a key
          ))
        ) : (
          <div className='no-character-found'>No character found</div>
        )}
      </div>
    </main>
  );
}
