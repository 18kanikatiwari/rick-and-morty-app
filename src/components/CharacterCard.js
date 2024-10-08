import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


const CharacterCard = ({ character }) => {
  return (
    <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        height="180"
        image={character.image}
        alt={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {character.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {character.species}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {character.status}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
};

export default CharacterCard;
