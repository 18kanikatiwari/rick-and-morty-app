import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../queries/characterQueries';
import { Grid, CircularProgress, Button, Box } from '@mui/material';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const [page, setPage] = useState(1);  

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error.message}</p>;

  const { results, info } = data.characters;

  const handleNext = () => {
    if (info.next) {
      setPage(info.next);
    }
  };

  const handlePrev = () => {
    if (info.prev) {
      setPage(info.prev);
    }
  };

  return (
    <Box>
      <Grid container spacing={3}>
        {results.map((character) => (
          <Grid item key={character.id} xs={12} sm={6} md={4}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
      
      <Box display="flex" justifyContent="center" marginTop="20px">
        <Button 
          variant="contained" 
          onClick={handlePrev} 
          disabled={!info.prev}
          style={{ marginRight: '10px' }}
        >
          Previous
        </Button>
        <Button 
          variant="contained" 
          onClick={handleNext} 
          disabled={!info.next}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CharacterList;
