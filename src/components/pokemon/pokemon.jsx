import React, { useState, useEffect } from 'react';
import PokemonCard from './pokemonCard';

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [pokeApiUrl, setPokeApiUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [isLoading, setIsLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');

  const fetchPokemonData = async () => {
    try {
      //fecth data
      const response = await fetch(pokeApiUrl);
      // convert response to js object
      const data = await response.json();
      //Set State for next & previous url
      setNextUrl(data.next);
      setPreviousUrl(data.previous);

      // creates an array of promises for detailed Pokemon information based on URLs
      const resultPromises = data.results.map((pokemon) => fetch(pokemon.url).then((response) => response.json())); //sekarfang resultpromise akan menjadi array yang setiap array akan berisi detail data dari setiap pokemon

      //Save the array in pokemonDat
      const pokemonData = await Promise.all(resultPromises);

      setPokemons(
        pokemonData.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          imageUrl: pokemon.sprites.other ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_default,
          type: pokemon.types[0].type.name,
        }))
      );

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchPokemonData();
  }, [pokeApiUrl]);

  const PaginationBtns = () => {
    return (
      <div className="flex justify-center my-8">
        <button disabled={previousUrl == null} onClick={() => setPokeApiUrl(previousUrl)} className="text-white  bg-black py-1 px-3  disabled:text-slate-500">
          ← Prev
        </button>
        <div className="text-white  bg-black py-1 px-3 mx-2 ">load more ...</div>
        <button disabled={nextUrl == null} onClick={() => setPokeApiUrl(nextUrl)} className="text-white  bg-black py-1 px-3 ">
          Next →
        </button>
      </div>
    );
  };

  return (
    <>
      <div>
        <PaginationBtns />

        {isLoading ? (
          <p className="text-center text-black text-lg">Loading, Please wait...</p>
        ) : (
          <div className="px-5 lg:px-14 grid grid-cols-2 md:grid-cols-3  gap-5 lg:gap-8 place-content-center">
            {pokemons.map((e) => (
              <PokemonCard key={e.id} pokemonName={e.name} pokemonImage={e.imageUrl} pokemonType={e.type} id={e.id} />
            ))}
          </div>
        )}

        <PaginationBtns />
      </div>
    </>
  );
}

/*
EXPLANATION : 





*/
