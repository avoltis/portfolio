import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { HomeScreen } from './components/Home';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: 'https://portfolio-graphql-voltis.herokuapp.com/'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar />
        <HomeScreen />
      </div>
    </ApolloProvider>
  );
}

export default App;
