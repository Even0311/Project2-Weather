import fetchForecastByCoord from "../service/fetchForecastByCoord";

const forecastDataByCoord = async (coord) => {
	const data = await (await fetchForecastByCoord(coord)).data.daily;
	return data;
};

export { forecastDataByCoord };
