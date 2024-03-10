import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PokemonCard = ({ pokemonName, pokemonImage, pokemonType, id }) => {
  return (
    <Link to={`/pokemon/${id}`} className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
      <div className="shadow p-4 rounded-lg bg-[#272727]">
        <div
          className="bg-[#E8BDF9] flex flex-col justify-center items-center gap-4 rounded-lg hover:bg-slate-200 transition cursor-pointer h-52"
          style={{
            background: 'hsla(154, 100%, 76%, 1)',
            background: 'linear-gradient(90deg, hsla(154, 100%, 76%, 1) 0%, hsla(234, 100%, 83%, 1) 50%, hsla(288, 100%, 81%, 1) 100%)',
            background: '-moz-linear-gradient(90deg, hsla(154, 100%, 76%, 1) 0%, hsla(234, 100%, 83%, 1) 50%, hsla(288, 100%, 81%, 1) 100%)',
            background: '-webkit-linear-gradient(90deg, hsla(154, 100%, 76%, 1) 0%, hsla(234, 100%, 83%, 1) 50%, hsla(288, 100%, 81%, 1) 100%)',
            filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#84ffc9", endColorstr="#aab2ff", GradientType=1 )',
          }}
        >
          {' '}
          <img className="h-3/5" src={pokemonImage} />
        </div>
        <div className="flex justify-between my-2 text-white w-full items-center">
          <div className="flex flex-col ">
            <p className="text-xl text-center capitalize">{pokemonName}</p>
            <p className="text-sm text-cener text-gray-500">by BroKariim</p>
          </div>
          {/* <p className="text-md text-center capitalize">{pokemonType}</p> */}
          <p className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative px-6 py-3 transition-all ease-out bg-[#272727] rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white">{pokemonType}</span>
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
