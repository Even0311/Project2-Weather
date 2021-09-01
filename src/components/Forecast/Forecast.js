import { ForecastCard } from "./ForecastCard";

const Forecast = (props) => {
	return (
		<div>
			{props.forecast.map((dayData, index) => {
				return <ForecastCard dayData={dayData} key={index}></ForecastCard>;
			})}
		</div>
	);
};

export { Forecast };
