import { SendHorizonal } from "lucide-react";
import { useState } from "react";
import { getGeolocation, getWeather } from "../services/api";
import { WeatherData } from "../types";

interface Props {
  onSearch: (weather: WeatherData) => void;
}

export const SearchCity = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search === "") return;
    const location = await getGeolocation(search);
    const data = await getWeather(location.lat, location.lon);
    onSearch(data);
  };

  const handleEnterPressed = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key.trim().toLowerCase() === "enter") {
      handleSearch();
    }
  };

  return (
    <div
      className="relative flex items-center bg-white rounded-full border border-slate-400"
      onKeyUp={handleEnterPressed}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Ex: Rio de Janeiro"
        className="outline-none w-full text-lg px-4 py-2 font-medium bg-transparent"
      />

      <button
        className="absolute p-2 flex justify-center items-center text-slate-400 right-[2px] transition-colors
        rounded-full
      hover:bg-slate-400 hover:text-white
      "
        onClick={handleSearch}
      >
        <SendHorizonal />
      </button>
    </div>
  );
};
