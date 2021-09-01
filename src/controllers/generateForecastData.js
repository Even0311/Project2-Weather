const generateForecastData = (
	daysToForecast,
	ForecastDataFromAPI,
	daysList
) => {
	let res = [];
	for (let i = 0; i < daysToForecast; i++) {
		let dayData = {};
		dayData.day = daysList[i];
		dayData.icon = ForecastDataFromAPI[i].weather[0].icon;
		dayData.temp = ForecastDataFromAPI[i].temp.day;
		dayData.desc = ForecastDataFromAPI[i].weather[0].main;
		res.push(dayData);
	}
	return res;
};

export { generateForecastData };
