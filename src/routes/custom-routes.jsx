import { Route, Routes } from 'react-router-dom';
import PokeApp from '../components/pokemon/pokeMain';
import PokemonPage from '../components/pokemon/pokemonPage';
import Home from '../components/home';

//ni bagusnya bagian terkahir

export default function CustomRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<PokeApp />} /> */}
        <Route path="/pokemon/:id" element={<PokemonPage />} />
      </Routes>
    </>
  );
}
