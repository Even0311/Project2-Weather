import axios from "axios";
import { key } from "../constant";

const fetchForecastByCoord = async (coord) => {
	try {
		const data = await axios.get(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${key}`
		);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export default fetchForecastByCoord;
