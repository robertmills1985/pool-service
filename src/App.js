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
		<h4>Alk: </h4>
		<p>{props.alk}</p>
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
		var alk = document.getElementById('alk-results').innerHTML;
		this.setState({
            chl: chl,
            ph: ph,
            alk: alk
		});
	}

	render() {
		return (
			<div>
				<ChemReadings handleSubmit={() => this.handleSubmit()} />
				<Commited chl={this.state.chl} ph={this.state.ph} alk={this.state.alk} />
			</div>
		);
	}
}

export default App;
