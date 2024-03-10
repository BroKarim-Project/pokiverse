import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="absolute  w-full top-0 bg-transparent z-50">
      <div className=" mx-auto px-8 py-8 flex  items-center justify-between">
        {/* <div className=""> */}
        <div className="text-center sm:text-left items-center flex gap-4 ">
          <form className="max-w-sm mx-auto items-center flex justify-between">
            <select
              id="underline_select"
              className="block py-2.5 px-2 w-full uppercase text-sm text-white bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              onClick={toggleDropdown}
              onFocus={toggleDropdown}
              onBlur={() => setIsOpen(false)}
            >
              {' '}
              <option selected style={{ backgroundColor: 'black' }}>
                En
              </option>
              <option value="US" style={{ backgroundColor: 'black' }}>
                ID
              </option>
            </select>
          </form>
          <p className="text-white text-sm uppercase">Login</p>
          <p className="text-white text-sm uppercase">Signup</p>
        </div>

        <div className="flex  gap-4  sm:items-center">
          <button
            href="#_"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-white border-solid  cursor-pointer select-none hover:text-white hover:border-gray-600 focus:shadow-xs focus:no-underline"
          >
            Start exploring
          </button>
        </div>
        {/* </div> */}
      </div>
    </header>
  );
}
