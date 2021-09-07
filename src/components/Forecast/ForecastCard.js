const ForecastCard = (props) => {
	return (
		<div className="ForecastCard">
			<div className="ForecastCard__Day">{props.dayData.day}</div>

			<img
				className="ForecastCard__Icon"
				src={`https://openweathermap.org/img/wn/${props.dayData.icon}@2x.png`}
				alt={props.dayData.icon}
			></img>

			<div className="ForecastCard__Temp">{props.dayData.temp}°C</div>
			<div className="ForecastCard__Desc">{props.dayData.desc}</div>
		</div>
	);
};

export { ForecastCard };
