import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export class SearchBar extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	term: '',
	  };

	  this.onChange = this.onChange.bind(this);
	  this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ term: e.target.value })
	}

	onSubmit(e) {
		e.preventDefault()

		this.props.fetchWeather(this.state.term);
		this.setState({
			term : '',
		})
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} className="input-group">
				<input 
				placeholder="Get a 5 day forecast in your favourite cities"
				className="form-control"
				value={this.state.term}
				onChange={this.onChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
