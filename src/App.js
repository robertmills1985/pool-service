import React, { Component } from 'react';
import ChemReadings from './ChemicalReadings/ChemReadings';
import ServicesProvided from './ServicesProvided';
import Inventory from './Inventory.js';

class App extends Component {
	constructor() {
		super();

		this.state = {
			chemical: {},
			services: {},
			inventory: {}
		};
	}

	handleSubmit() {
		var chl = document.getElementById('chl-results').innerHTML;
		var ph = document.getElementById('ph-results').innerHTML;
		var alk = document.getElementById('alk-results').innerHTML;
		var tds = document.getElementById('tds-readings').innerHTML;
		var salt = document.getElementById('salt-readings').innerHTML;
		var temp = document.getElementById('temp-readings').innerHTML;
		var phos = document.getElementById('phos-readings').innerHTML;
		var calc = document.getElementById('calc-readings').innerHTML;
		var cya = document.getElementById('cya-readings').innerHTML;
		var pres = document.getElementById('pres-readings').innerHTML;
		var comments = document.getElementById('commented').innerHTML;

		this.setState({
			chemical: {
				chl: chl,
				ph: ph,
				alk: alk,
				tds: tds,
				salt: salt,
				temp: temp,
				phos: phos,
				calc: calc,
				cya: cya,
				pres: pres,
				comments: comments
			}
		});
	}

	render() {
		return (
			<div>
				<ChemReadings handleSubmit={() => this.handleSubmit()} />
				<ServicesProvided />
				<Inventory />
			</div>
		);
	}
}

export default App;
