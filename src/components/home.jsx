import Header from './header';
import PokeApp from './pokemon/pokeMain';
import './pokemon/pokemon.css';

export default function Home() {
  return (
    <div>
      <Header />

      <section
        style={{
          width: '100%',
          height: '100vh',
          backgroundImage: `url('/bg.png')`, // Gunakan URL atau path gambar background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full h-screen flex justify-center items-center overflow-hidden relative bg-black"
      >
        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>{' '}
        {/* <img src="/bg.png" alt="Hero image" className="opacity-60 object-cover" /> */}
        <div className="flex flex-col gap-2 justify-center items-center px-3">
          <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
            WELCOME TO <br />
            <span className="text-primary">POKI VERSE</span>
          </h1>
          <p className="mt-5 sm:w-1/2 w-2/3 text-center text-sm sm:text-md text-white opacity-90">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.y...</p>
          <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-center text-black no-underline align-middle transition-all duration-300 ease-in-out bg-white border-solid  cursor-pointer select-none hover:text-white hover:bg-transparent focus:shadow-xs focus:no-underline">
            Start exploring
          </button>
        </div>
      </section>
      <PokeApp />
    </div>
  );
}
