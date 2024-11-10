import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function SearchNavItem() {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = () => {
    console.log("Search is: ", search);
  };

  return (
    <form className="relative mt-4" onSubmit={handleSubmit}>
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        type="search"
        className="p-2 pl-10 text-black rounded-xl w-full sm:w-[400px] bg-slate-300 focus:ring-2 focus:outline-none focus:ring-black"
        aria-label="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
}

export default SearchNavItem;
