import axios from "axios";
import { NEWSAPI } from "../constant";

const fetchNewsByCity = async (city) => {
	try {
		const result = await axios.get(
			`https://newsapi.org/v2/everything?qInTitle=${city}&sortBy=publishedAt&language=en&apiKey=${NEWSAPI}`
		);
		return result;
	} catch (e) {
		console.log(e);
	}
};

export default fetchNewsByCity;
