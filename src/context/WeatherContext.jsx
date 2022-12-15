import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
import { useCity } from "./CityContext";

const WeatherContxt = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const { city } = useCity();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=$${city}&aqi=no`
      );
      const { location, current } = res.data;
      setWeather({
        name: location.name,
        region: location.region,
        country: location.country,
        temp_c: current.temp_c,
        text: current.condition.text,
        icon: current.condition.icon,
      });
    };
    fetchData();
  }, [city]);
  const values = { weather, setWeather };
  return (
    <WeatherContxt.Provider value={values}>{children}</WeatherContxt.Provider>
  );
};

export const useWeather = () => useContext(WeatherContxt);
