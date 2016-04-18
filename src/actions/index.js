import axios from 'axios';
const API_KEY = '6bd9a10f7d4d1c3024b01a9dcbb14cf2';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);


  return {
    type : FETCH_WEATHER,
    payload: request

  };
}
