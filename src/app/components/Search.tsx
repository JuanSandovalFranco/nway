import Input from "./Input";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {
  type?: "icon" | "search-bar";
};

const Search = ({ type = "search-bar" }: Props) => {
  if (type === "icon")
    return (
      <button className="p-3 transition duration-75 hover:bg-gray-200 rounded-full">
        <AiOutlineSearch className="text-3xl" />
      </button>
    );

  if (type === "search-bar")
    return (
      <div className="absolute">
        <span className="absolute top-3 right-3">
          <AiOutlineSearch className="text-3xl text-gray-700" />
        </span>
        <Input
          type="search"
          placeholder="Buscar..."
          className="bg-gray-100 focus:ring-2 ring-gray-300 rounded-xl"
        />
      </div>
    );
  else {
    return null;
  }
};

export default Search;
