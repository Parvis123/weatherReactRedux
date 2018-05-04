import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {
	renderWeather(cityData) {
	const cityName = cityData.city.name
	const cityTemp = cityData.list.map(data => data.main.temp - 273);
	const cityPressure = cityData.list.map(data => data.main.pressure);
	const cityHumidity = cityData.list.map(data => data.main.humidity);
		return (
			<tr key={ cityName }>
				<td>{ cityName }</td>
				<td><Chart data={cityTemp} color="orange" units="°C"/></td>
				<td><Chart data={cityPressure} color="blue" units="hPa"/></td>
				<td><Chart data={cityHumidity} color="red" units="%"/></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (°C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
				{ this.props.weather.map(this.renderWeather) }
				</tbody>
			</table>
		);
	}
}

export function mapStateToProps({weather}) {
	return { weather }; // equal to { weather:weather }
}



export default connect(mapStateToProps)(WeatherList);