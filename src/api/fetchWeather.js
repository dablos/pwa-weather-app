import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
// Provide below the key you have generated in openweathermap
const API_KEY = '';

export const fetchWeather = async(q) => {
    const { data } = await axios.get(URL, {
        params: {
            q: q,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}