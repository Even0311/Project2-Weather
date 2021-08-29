import React from "react";
//import { key } from "../constant";
class Weather extends React.Component {
	constructor(props) {
		super(props);
		const arrayCity = this.props.arrayCity || ["Sydney"];
		this.state = {
			arrayCity: arrayCity,
			defaultCity: arrayCity[0],
		};
	}
	handleCityChange = async (e) => {
		this.setState({
			defaultCity: e.target.value,
		});
	};
	render() {
		return (
			<div>
				<select
					className="citySelecter"
					onChange={(e) => {
						this.handleCityChange(e);
					}}
				>
					{this.state.arrayCity.map((city, index) => {
						return (
							<option value={city} key={index}>
								{city}
							</option>
						);
					})}
				</select>
				<h3>{this.state.defaultCity}</h3>
			</div>
		);
	}
}

export default Weather;
