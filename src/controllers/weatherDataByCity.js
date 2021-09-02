import { fetchWeatherByCity } from "../service";

const weatherDataByCity = async (city) => {
	const data = await fetchWeatherByCity(city);
	console.log(data);
	const temp = data.data.main.temp + "°C";
	const weather = data.data.weather[0].main;
	const humidity = data.data.main.humidity;
	const wind = data.data.wind.speed;
	const coordinates = data.data.coord;
	return {
		weatherData: { temp, weather, humidity, wind },
		coordinates: coordinates,
	};
};

export default weatherDataByCity;
