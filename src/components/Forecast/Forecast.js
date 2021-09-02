import { ForecastCard } from "./ForecastCard";
import "./Forecast.scss";
const Forecast = (props) => {
	return (
		<div className="forecastContainer">
			{props.forecast.map((dayData, index) => {
				return <ForecastCard dayData={dayData} key={index}></ForecastCard>;
			})}
		</div>
	);
};

export { Forecast };
