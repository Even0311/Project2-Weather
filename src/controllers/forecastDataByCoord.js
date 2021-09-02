import { fetchForecastByCoord } from "../service";

const forecastDataByCoord = async (coord) => {
	const data = await (await fetchForecastByCoord(coord)).data.daily;
	return data;
};

export default forecastDataByCoord;
