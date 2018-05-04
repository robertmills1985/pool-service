import React, { Component } from 'react';
import ChemReadings from './ChemicalReadings/ChemReadings';
import ServicesProvided from './ServicesProvided';
import Inventory from './Inventory.js'

const Commited = (props) => (
	<div class="chem-panel">
		<h2>Submitted</h2>
		<h4>Chl: </h4>
		<p>{props.chl}</p>
		<h4>pH: </h4>
		<p>{props.ph}</p>
		<h4>Alk: </h4>
		<p>{props.alk}</p>
		<p>{props.tds}</p>
		<p>{props.salt}</p>
		<p>{props.temp}</p>
		<p>{props.phos}</p>
		<p>{props.calc}</p>
		<p>{props.cya}</p>
		<p>{props.pres}</p>
		<p>{props.comments}</p>
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
		var tds = document.getElementById('tds-readings').innerHTML;
		var salt = document.getElementById('salt-readings').innerHTML;
		var temp = document.getElementById('temp-readings').innerHTML;
		var phos = document.getElementById('phos-readings').innerHTML;
		var calc = document.getElementById('calc-readings').innerHTML;
		var cya = document.getElementById('cya-readings').innerHTML;
		var pres = document.getElementById('pres-readings').innerHTML;
		var comments = document.getElementById('commented').innerHTML;

		this.setState({
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
		});
	}

	render() {
		return (
			<div>
				{/*<ChemReadings handleSubmit={() => this.handleSubmit()} />*/}
				<ServicesProvided />
				<Inventory />
				<div hidden>
					<Commited
						chl={this.state.chl}
						ph={this.state.ph}
						alk={this.state.alk}
						tds={this.state.tds}
						salt={this.state.salt}
						temp={this.state.temp}
						phos={this.state.phos}
						calc={this.state.calc}
						cya={this.state.cya}
						pres={this.state.pres}
						comments={this.state.comments}
					/>
				</div>
			</div>
		);
	}
}

export default App;
