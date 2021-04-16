import { Dispatch, SetStateAction, useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid'

type SearchBarProps = {
  setKeyword: Dispatch<SetStateAction<string>>;
};

function SearchBar({ setKeyword }: SearchBarProps) {
  const [value, setValue] = useState('');

  function onSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();

    setKeyword(value);
  }

  return (
    <form className="w-full flex md:ml-0" action="#" method="GET">
      <label htmlFor="search_field" className="sr-only">
        Search
    </label>
      <div className="relative w-full text-gray-400 focus-within:text-gray-600">
        <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        <input
          id='search'
          className="bg-gray-200 block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
          placeholder="Search"
          type="search"
          value={value}
          name="search"
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </div>
    </form>
  );
}

export default SearchBar;