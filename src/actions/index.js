import axios from 'axios';

const apiKey= '3d59f9ba0539b7ba565aa8a691fd03bc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url =`${ROOT_URL}&q=${city},GB`;
	const request = axios.get(url)

	console.log('Request:', request)

	return {
		type: 'FETCH_WEATHER',
		payload : request
	};
}