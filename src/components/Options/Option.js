import "./Option.scss";
const Option = (props) => {
	return (
		<option className="citySelecter__Option" value={props.city}>
			{props.city}
		</option>
	);
};

export { Option };
