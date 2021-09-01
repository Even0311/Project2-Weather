import axios from "axios";
import { key } from "../constant";

const fetchWeatherByCity = async (city) => {
	try {
		const data = await axios.get(
			`//api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
		);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export default fetchWeatherByCity;
