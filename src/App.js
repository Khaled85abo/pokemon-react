import './App.css';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import axios from 'axios'
//Pages
import Homepage from './pages/Homepage';
import PokemonPage from './pages/PokemonPage';
import Header from './components/Header';

const App = () => {

  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);


  const getPokemonListJson = async () => {
    setLoading(true)
    const res = await axios.get('./data.json');
    console.log('res from axios: ', res.data)
    setPokemon(res.data);
    setLoading(false);

  }
  useEffect(() => {
    getPokemonListJson();
  }, [])

  return (
    <>
      <Header setSearch={setSearch} />
      <Container>

        <Route exact path='/' >
          <Homepage search={search} pokemons={pokemon} loading={loading} />
        </Route>
        <Route path='/pokemon/:id' >
          <PokemonPage />
        </Route>


      </Container>
    </>

  );
}

export default App;
