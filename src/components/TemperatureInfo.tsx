import { MoveDown, MoveUp } from "lucide-react";

interface Props {
  temp: number;
  temp_max: number;
  temp_min: number;
}
export const TemperatureInfo = ({ temp, temp_max, temp_min }: Props) => {
  return (
    <div className="flex items-center justify-center gap-1 m-5">
      <span className="text-7xl text-slate-700">{Math.round(temp)}</span>
      <div className="flex flex-col justify-center">
        <span className="text-lg text-slate-700 leading-none mt-3">ºC</span>
        <div className="flex flex-col mt-2 gap-1 text-sm text-slate-600 font-medium leading-none">
          <div className="flex items-centers">
            <MoveUp size={14} />
            <span>{Math.round(temp_max)}º</span>
          </div>
          <div className="flex items-center">
            <MoveDown size={14} />
            <span>{Math.round(temp_min)}º</span>
          </div>
        </div>
      </div>
    </div>
  );
};
