import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { ICharacterType } from '../models/characters.model';

import './style.scss';

type CharacterCardType = {
  character: ICharacterType;
  onClick: () => void;
} 

const CharacterCard: React.FC<CharacterCardType> = ({ character, onClick }) => {
  return (
    <Card className='card' onClick={onClick}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>gender - {character.gender}</p>
            <p>hair color - {character.hair_color}</p>
            <p>skin color - {character.skin_color}</p>
            <p>eye color - {character.eye_color}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onClick}>
          See Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default CharacterCard;
