import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  function handleSubmit(e) {
    e.preventDefault();
    searchParams.set("search", search);
    setSearchParams(searchParams);
  }

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <span className="absolute top-4 left-4">
        <HiOutlineSearch className="text-dark-gray-light-mode h-4 w-4" />
      </span>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="placeholder:text-dark-gray-light-mode w-75 md:w-[400px] rounded-md bg-white dark:bg-cyan-900 px-3 py-3 pl-12 shadow-sm"
        type="text"
        placeholder="Search for a country..."
      />
    </form>
  );
}

export default SearchBar;
