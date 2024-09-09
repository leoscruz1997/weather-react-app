export const getGeolocation = async (city: string) => {
  try {
    const request = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&lang=pt_br&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const response = await request.json();
    return response[0];
  } catch (error) {
    console.log(error);
  }
};

export const getWeather = async (lat: number, lon: number) => {
  try {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
