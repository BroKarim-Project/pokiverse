import Pokemons from './pokemon';

const PokeApp = () => {
  return (
    <>
      <div className="bg-[url(https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full  bg-contain bg-black bg-center  py-8">
        <div className="max-w-lg  mx-auto flex flex-col items-center">
          <h1 className="text-white text-3xl tracking-widest uppercase mb-4">Pokemon App</h1>
        </div>
        <Pokemons />
      </div>
    </>
  );
};

export default PokeApp;
