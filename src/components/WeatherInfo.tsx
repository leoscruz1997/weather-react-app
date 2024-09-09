import { formatedDate } from "../utils/formatDate";
import _ from "lodash";
interface Props {
  icon: string;
  description: string;
}

export const WeatherInfo = ({ icon, description }: Props) => {
  const date = formatedDate();
  return (
    <div className="sm:border-r sm:border-slate-500 sm:flex sm:flex-1">
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="mx-auto sm:mx-0"
      />
      <div className="text-center font-medium text-slate-700 flex flex-col sm:justify-center sm:text-start">
        <span className="text-sm">{date}</span>
        <span className="font-semibold text-lg">
          {_.capitalize(description)}
        </span>
      </div>
    </div>
  );
};
