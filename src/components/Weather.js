import React from "react";

import { weatherDataByCity } from "../controllers/weatherDataByCity";
import { CitySelecter } from "./CitySelecter/CitySelecter.js";
import { forecastDataByCoord } from "../controllers/forecastDataByCoord";
import { week, FORECASTDAYS } from "../constant";
import { calculateNextNDaysFactory } from "../controllers/calculateNextNDays";
import { Forecast } from "./Forecast/Forecast.js";
import { generateForecastData } from "../controllers/generateForecastData";
class Weather extends React.Component {
	constructor(props) {
		super(props);
		const arrayCity = this.props.arrayCity || ["Sydney"];
		this.state = {
			arrayCity: arrayCity,
			citySelected: arrayCity[0],
			weather: {},
			forecast: [],
		};
	}
	handleCityChange = async (e) => {
		const weatherData = await weatherDataByCity(e.target.value);
		const foreCastData = await forecastDataByCoord(weatherData.coordinates);
		const cauculateNextFiveDays = calculateNextNDaysFactory(FORECASTDAYS);
		const days = cauculateNextFiveDays(new Date().getDay(), week);
		const forecastDataArray = generateForecastData(
			FORECASTDAYS,
			foreCastData,
			days
		);

		this.setState({
			citySelected: e.target.value,
			weather: weatherData.weatherData,
			forecast: forecastDataArray,
		});
	};

	async componentDidMount() {
		const weatherData = await weatherDataByCity(this.state.citySelected);
		const foreCastData = await forecastDataByCoord(weatherData.coordinates);
		//console.log(foreCastData);
		const cauculateNextFiveDays = calculateNextNDaysFactory(FORECASTDAYS);
		const days = cauculateNextFiveDays(new Date().getDay(), week);
		const forecastDataArray = generateForecastData(
			FORECASTDAYS,
			foreCastData,
			days
		);
		// console.log(forecastDataArray, "=====================");
		this.setState({
			weather: weatherData.weatherData,
			forecast: forecastDataArray,
		});
	}
	render() {
		return (
			<div>
				<CitySelecter
					handleCityChange={this.handleCityChange}
					arrayCity={this.state.arrayCity}
				></CitySelecter>
				{Object.keys(this.state.weather).map((key, index) => {
					return <h4 key={index}>{this.state.weather[key]}</h4>;
				})}
				<Forecast forecast={this.state.forecast}></Forecast>
			</div>
		);
	}
}

export default Weather;
