import React, { Component } from 'react';

class OtherReadings extends Component {
	constructor() {
		super();

		this.state = {};
    }
    
    //Finish these functions with if statements like i did with handleTDS() below
	handleTDS() {
		if (document.getElementById('tds-reading').value) {
			var tds = document.getElementById('tds-reading').value;
			this.setState({
				tds: 'TDS is at ' + tds
			});
		} else {
			alert('You did not enter any information!');
		}
	}
	handleSalt() {
		var salt = document.getElementById('salt-reading').value;
		this.setState({
			salt: 'Salt is at ' + salt
		});
	}
	handleTemp() {
		var temp = document.getElementById('temp-reading').value;
		this.setState({
			temp: 'Tempature is at ' + temp
		});
	}
	handlePhos() {
		var phos = document.getElementById('phos-reading').value;
		this.setState({
			phos: 'Phos is at ' + phos
		});
	}
	handleCalc() {
		var calc = document.getElementById('calc-reading').value;
		this.setState({
			calc: 'Calcium is at ' + calc
		});
	}
	handleCya() {
		var cya = document.getElementById('cya-reading').value;
		this.setState({
			cya: 'Cyanuric is at ' + cya
		});
	}
	handlePres() {
		var pres = document.getElementById('pres-reading').value;
		this.setState({
			pres: 'Filter pressure is at ' + pres
		});
	}
	render() {
		return (
			<div class="chem-panel">
				<div>
					<input id="tds-reading" type="text" placeholder="TDS" />
					<button onClick={() => this.handleTDS()}>Save</button>
					<input id="salt-reading" type="text" placeholder="Salinity" />
					<button onClick={() => this.handleSalt()}>Save</button>
					<input id="temp-reading" type="text" placeholder="Teampature" />
					<button onClick={() => this.handleTemp()}>Save</button>
					<input id="phos-reading" type="text" placeholder="Phospahtes" />
					<button onClick={() => this.handlePhos()}>Save</button>
					<input id="calc-reading" type="text" placeholder="Calcium" />
					<button onClick={() => this.handleCalc()}>Save</button>
					<input id="cya-reading" type="text" placeholder="Cyanuric" />
					<button onClick={() => this.handleCya()}>Save</button>
				</div>
				<div>
					<input id="pres-reading" type="text" placeholder="Pressure" />
					<button onClick={() => this.handlePres()}>Save</button>
				</div>
				<div>
					<h4>Readings</h4>
					<p id="tds-readings">{this.state.tds}</p>
					<p id="salt-readings">{this.state.salt}</p>
					<p id="temp-readings">{this.state.temp}</p>
					<p id="phos-readings">{this.state.phos}</p>
					<p id="calc-readings">{this.state.calc}</p>
					<p id="cya-readings">{this.state.cya}</p>
					<p id="pres-readings">{this.state.pres}</p>
				</div>
			</div>
		);
	}
}

export default OtherReadings;
