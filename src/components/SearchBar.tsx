import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="flex items-center mt-5 justify-center">
      <input
        type="search"
        placeholder="Search..."
        className="outline-none w-[30%] h-9 bg-transparent border border-r-0 rounded-s-lg pl-2"
        onChange={handleChange}
      />
      <button className="h-9 w-10 flex items-center justify-center rounded-e-lg bg-purple-700 border ">
        <Search />
      </button>
    </div>
  );
}
