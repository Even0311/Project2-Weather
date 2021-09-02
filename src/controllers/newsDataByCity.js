import { fetchNewsByCity } from "../service";
const newsDataByCity = async (city) => {
	const result = await fetchNewsByCity(city);
	return result;
};

export default newsDataByCity;
