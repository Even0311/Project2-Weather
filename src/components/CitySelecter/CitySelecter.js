import React from "react";
import { Option } from "../Options/Option.js";
import "./CitySelecter.scss";
const CitySelecter = (props) => {
	return (
		<select
			className="citySelecter"
			onChange={(e) => {
				props.handleCityChange(e);
			}}
		>
			{props.arrayCity.map((city) => {
				return <Option city={city} key={city}></Option>;
			})}
		</select>
	);
};
export { CitySelecter };
