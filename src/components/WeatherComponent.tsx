import { ArrowLeft, MapPin } from "lucide-react";
import { WeatherData } from "../types";
import { TemperatureInfo } from "./TemperatureInfo";
import { WeatherInfo } from "./WeatherInfo";

interface Props {
  data: WeatherData;
  onBack: () => void;
}

export const WeatherComponent = ({ data, onBack }: Props) => {
  return (
    <div className="bg-slate-400 rounded-md shadow-lg p-2">
      <div className="flex justify-between items-center ">
        <div className="flex gap-1 items-center">
          <MapPin size={18} fill="#64748b" stroke="#94a3b8" strokeWidth={1} />
          <h1 className="text-center font-medium text-sm text-slate-700">
            {data.name}, {data.sys.country}
          </h1>
        </div>

        <button
          className="transition-colors p-2 right-2 top-2 flex items-center rounded-full text-slate-700 hover:bg-slate-700 hover:text-white"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
        </button>
      </div>
      <div className="sm:flex items-center gap-5">
        <WeatherInfo
          icon={data.weather[0].icon}
          description={data.weather[0].description}
        />

        <TemperatureInfo
          temp={data.main.temp}
          temp_max={data.main.temp_max}
          temp_min={data.main.temp_min}
        />
      </div>
    </div>
  );
};
