import React from "react";
import "./Weather.scss";
import {
	weatherDataByCity,
	forecastDataByCoord,
	calculateNextNDaysFactory,
	generateForecastData,
	newsDataByCity,
} from "../controllers";
import { CitySelecter } from "./CitySelecter/CitySelecter.js";

import { week, FORECASTDAYS, NEWSNUMBERTODISPLAY } from "../constant";

import { Forecast } from "./Forecast/Forecast.js";

import { News } from "../components/News/News.js";

import Banner from "./Banner/Banner.js";
import { Sydney, Paris, NewYork, Beijing } from "../background";
import TodayWeatherDataDisplayBoard from "../components/TodayWeatherDataDisplayBoard/TodayWeatherDataDisplayBoard.js";
import Body from "./Body/Body.js";
class Weather extends React.Component {
	constructor(props) {
		super(props);
		const arrayCity = this.props.arrayCity || ["Sydney"];
		this.state = {
			arrayCity: arrayCity,
			citySelected: arrayCity[0],
			weather: {},
			forecast: [],
			articles: [],
			newsIndex: 0,
			loading: true,
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
		let data = await (await newsDataByCity(e.target.value)).data.articles;
		if (data.length >= 24) {
			data = data.slice(0, 24);
		}

		this.setState({
			citySelected: e.target.value,
			weather: weatherData.weatherData,
			forecast: forecastDataArray,
			articles: data,
			newsIndex: 0,
		});
	};

	async componentDidMount() {
		// fetch Weather data of default selected city
		const weatherData = await weatherDataByCity(this.state.citySelected);
		console.log(weatherData);
		// fetch Forecast weather data of the city, queried by the coordinates of the city,
		//the coordinates data are returned from the weatherDataByCity
		const foreCastData = await forecastDataByCoord(weatherData.coordinates);

		const cauculateNextFiveDays = calculateNextNDaysFactory(FORECASTDAYS);
		const days = cauculateNextFiveDays(new Date().getDay(), week);
		const forecastDataArray = generateForecastData(
			FORECASTDAYS,
			foreCastData,
			days
		);
		let data = await (
			await newsDataByCity(this.state.citySelected)
		).data.articles;
		if (data.length >= 24) {
			data = data.slice(0, 24);
		}

		this.setState({
			weather: weatherData.weatherData,
			forecast: forecastDataArray,
			articles: data,
			loading: false,
		});
	}
	handlePageChange = (value) => {
		const adjustment =
			value === "prev" ? -NEWSNUMBERTODISPLAY : NEWSNUMBERTODISPLAY;
		const newIndex = this.state.newsIndex + adjustment;
		this.setState({ newsIndex: newIndex });
	};
	render() {
		const cityImageMap = {
			Sydney: Sydney,
			Paris: Paris,
			"New York": NewYork,
			Beijing: Beijing,
		};
		return (
			<div className="weatherBoardContainer">
				{this.state.loading && <h2>Loading</h2>}

				<Banner imgUrl={cityImageMap[this.state.citySelected]}>
					{" "}
					<CitySelecter
						handleCityChange={this.handleCityChange}
						arrayCity={this.state.arrayCity}
					></CitySelecter>
					<TodayWeatherDataDisplayBoard
						weatherData={this.state.weather}
					></TodayWeatherDataDisplayBoard>
				</Banner>
				<Body>
					<News
						articles={this.state.articles.slice(
							this.state.newsIndex,
							this.state.newsIndex + NEWSNUMBERTODISPLAY
						)}
						handleClick={(e) => {
							this.handlePageChange(e);
						}}
						prevIsDisabled={this.state.newsIndex === 0}
					></News>
					<Forecast forecast={this.state.forecast}></Forecast>
				</Body>
			</div>
		);
	}
}

export default Weather;
