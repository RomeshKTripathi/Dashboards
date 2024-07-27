import React from "react";

function SearchBar({ styles, placeholder, name }) {
  return (
    <form className="selection:bg-pink-500/30 self-center border dark:border-white/30 border-white/80 rounded-full w-96 p-1.5 pl-4 flex duration-500 has-[:focus]:grow">
      <input
        className={`bg-transparent outline-none focus:  placeholder:text-white/50 flex-grow ${styles}`}
        type="text"
        name={name}
        placeholder={placeholder || "Search Here..."}
      />
      <button className="outline-none border-none bg-transparent self-center mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white/30"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
