import Filter from "../../ui/Filter";
import SearchBar from "../../ui/SearchBar";

function MainHeader() {
  return (
    <div className="flex flex-wrap gap-5 md:gap-0 items-center justify-between w-[100%]">
      <SearchBar />
      <Filter />
    </div>
  );
}

export default MainHeader;
