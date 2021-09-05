import "./style.scss";
export default function TodayWeatherDataDisplayBoard(props) {
	return (
		<div className="todayWeatherContainer">
			<div className="todayWeatherContainer__temperature">
				{props.weatherData.temp}
			</div>
			<div className="todayWeatherContainer__weather">
				{props.weatherData.weather}
			</div>
			<div className="todayWeatherContainer__humidityAndWindBody">
				<div className="todayWeatherContainer__humidityAndWindBody--item">
					<h3>Humidity</h3>
					<span>{props.weatherData.humidity}%</span>
				</div>

				<div className="todayWeatherContainer__humidityAndWindBody--item">
					<h3>Wind</h3>
					<span>{props.weatherData.wind}K/H</span>
				</div>
			</div>
		</div>
	);
}
