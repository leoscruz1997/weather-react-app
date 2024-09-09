import { useState } from "react";
import { SearchCity } from "./components/SearchCity";
import { WeatherComponent } from "./components/WeatherComponent";
import { WeatherData } from "./types";
import { Footer } from "./components/Footer";

export const App = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const handleSearch = (data: WeatherData) => {
    setWeather(data);
  };

  return (
    <div className="w-screen h-screen px-5 flex flex-col justify-center bg-gradient-to-r from-slate-500 to-slate-700">
      <main className="container h-screen flex flex-col justify-center max-w-xl mx-auto">
        {!weather && <SearchCity onSearch={handleSearch} />}
        {weather && (
          <WeatherComponent data={weather} onBack={() => setWeather(null)} />
        )}
      </main>
      <Footer />
    </div>
  );
};
