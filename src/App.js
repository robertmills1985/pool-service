import React, { Component } from 'react';
import ServiceReport from './ServiceReport/ServiceReport';

class App extends Component {
	constructor() {
		super();

		this.state = {
			chl:null,
			ph:null,
			alk:null
		};
	}

	submitChemResults() {
		 var chl = document.getElementById('chl-results').value
		 console.log(chl)
		//this.setState({
		//	chl: chl,
		//	ph: ph,
		//	alk: alk
		//});
	}

	render() {
		return (
			<div className="App">
				<ul>
					<li>chl: {this.state.chl}</li>
					<li>pH: {this.state.ph}</li>
					<li>alk: {this.state.alk}</li>
				</ul>
				<ServiceReport commitChemReadings={() => this.submitChemResults()} />
			</div>
		);
	}
}

export default App;
