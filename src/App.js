import "./App.css";
import { arrayCity } from "./constant.js";
import Weather from "./components/Weather";
function App() {
	return (
		<div className="App">
			<Weather arrayCity={arrayCity}></Weather>
		</div>
	);
}

export default App;
