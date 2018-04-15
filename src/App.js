import React, { Component } from 'react';
import ChemReadings from './ChemReadings';
/* global $ */

const Commited = (props) => (
	<div class='chem-panel'>
		<h2>Submitted</h2>
		<h4>Chl: </h4>
		<p>{props.chl}</p>
		<h4>pH: </h4>
		<p>{props.ph}</p>
	</div>
);

class App extends Component {
	constructor() {
		super();

		this.state = {};
	}

	handleSubmit() {
		var chl = document.getElementById('chl-results').innerHTML;
		var ph = document.getElementById('ph-results').innerHTML;
		this.setState({
            chl: chl,
            ph: ph
		});
	}

	render() {
		return (
			<div>
				<ChemReadings handleSubmit={() => this.handleSubmit()} />
				<Commited chl={this.state.chl} ph={this.state.ph} />
			</div>
		);
	}
}

export default App;
