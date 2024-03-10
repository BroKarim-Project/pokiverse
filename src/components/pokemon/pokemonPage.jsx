import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './pokemon.css';

export default function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const progressBars = document.querySelectorAll('progress');
    progressBars.forEach((progressBar) => {
      progressBar.style.width = '10rem';
    });
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemonData = await response.json();
      // Panggilan API untuk mendapatkan spesies pokemon
      const speciesResponse = await fetch(pokemonData.species.url);
      const speciesData = await speciesResponse.json();

      // Ambil deskripsi dari hasil panggilan API spesies
      const description = speciesData.flavor_text_entries.find((entry) => entry.language.name === 'en').flavor_text;

      setPokemon({
        name: pokemonData.name,
        weight: pokemonData.weight,
        height: pokemonData.height,
        description: description,

        imageUrl: pokemonData.sprites.other ? pokemonData.sprites.other.dream_world.front_default : pokemonData.sprites.front_default,
        types: pokemonData.types.map((type) => type.type.name),
        stats: {
          hp: pokemonData.stats[0].base_stat,
          attack: pokemonData.stats[1].base_stat,
          defense: pokemonData.stats[2].base_stat,
          speed: pokemonData.stats[5].base_stat,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className=" bg-[url(https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-contain bg-black bg-center  p-8">
        <div className="w-full bg-black/60 rounded-md mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={'/'} className="text-white bg-slate-700 py-1 px-3 mb-2 rounded">
            ⇦ Go Back
          </Link>
          <div className="flex flex-col md:flex-row my-2 -mx-4">
            <div className="md:flex-1 px-4">
              <div
                className=" rounded-lg mb-4"
                style={{
                  background: 'hsla(154, 100%, 76%, 1)',
                  background: 'linear-gradient(90deg, hsla(154, 100%, 76%, 1) 0%, hsla(234, 100%, 83%, 1) 50%, hsla(288, 100%, 81%, 1) 100%)',
                  background: '-moz-linear-gradient(90deg, hsla(154, 100%, 76%, 1) 0%, hsla(234, 100%, 83%, 1) 50%, hsla(288, 100%, 81%, 1) 100%)',
                  background: '-webkit-linear-gradient(90deg, hsla(154, 100%, 76%, 1) 0%, hsla(234, 100%, 83%, 1) 50%, hsla(288, 100%, 81%, 1) 100%)',
                  filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#84ffc9", endColorstr="#aab2ff", GradientType=1 )',
                }}
              >
                <img className="w-4/5 md:w-ful  object-cover" src={pokemon.imageUrl} alt="Product Image" />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 uppercase dark:text-white mb-2">{pokemon.name}</h2>

              <ul>
                {pokemon.stats ? (
                  Object.keys(pokemon.stats).map((statName) => (
                    <li key={statName} className="text-whitre justify-start items-center flex gap-2 dark:text-gray-300 text-sm mb-4">
                      {statName}:
                      <progress max={100} value={pokemon.stats[statName]} />
                      {pokemon.stats[statName]}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-600 dark:text-gray-300 text-sm mb-4`">Loading stats...</li>
                )}
              </ul>

              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Types</span>
                <div className="flex items-center mt-2">
                  <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">{pokemon.types}</div>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Size:</span>
                <div className="flex items-center justify-between w-full mt-2">
                  <p className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"> Weight :{pokemon.weight}</p>
                  <p className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"> Height: {pokemon.height}</p>\
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Description:</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{pokemon.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*
<div className="bg-zinc-100 w-5/6 mx-auto max-w-2xl rounded-xl flex flex-col md:flex-row gap-10 md:gap-15 p-6 justify-center items-center">
                <img className="w-4/5 md:w-full m-auto" src={pokemon.imageUrl} />
              </div>

<div className="flex flex-col gap-4 md:gap-8 md:h-4/6">
                  <div className="flex items-center gap-10">
                    <h1 className="text-black capitalize text-3xl tracking-widest font-mono">{pokemon.name}</h1>
                    <p className="capitalize bg-slate-800 text-white py-0.5 px-2">{pokemon.types}</p>
                  </div>

                  <div className="flex items-center gap-10">
                    <p className="capitalize text-lg">
                      Weight: <span className="px-2 py-1 bg-slate-800 text-white">{pokemon.weight}</span>
                    </p>
                    <p className="capitalize text-lg">
                      Height: <span className="px-2 py-1 bg-slate-800 text-white">{pokemon.height}</span>
                    </p>
                  </div>
                </div>
*/
