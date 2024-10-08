import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';

import CharacterList from './components/CharacterList';
import Header from './components/Header';
import client from './graphql/client';  
import theme from './theme/theme';      

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container 
          maxWidth="lg" 
          style={{ marginTop: '20px', paddingBottom: '20px' }} 
        >
          <CharacterList />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
