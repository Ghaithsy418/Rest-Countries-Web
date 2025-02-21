import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get("filter") || "all");

  function handleChange(e) {
    setFilter(e.target.value);
    searchParams.set("filter", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select aria-label="filter" value={filter} onChange={handleChange} className="bg-white dark:bg-cyan-900 py-4 pl-3 pr-10 rounded-md shadow-md text-sm font-semibold">
      <option value="all">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}

export default Filter;
