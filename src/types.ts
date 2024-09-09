export interface CityGeolocation {
  lat: number;
  lon: number;
}

export interface WeatherType {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface TemperatureType {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WeatherData {
  id: number;
  name: string;
  weather: WeatherType[];
  main: TemperatureType;
  sys: WeatherCoutry
}

interface WeatherCoutry {
  country: string
}