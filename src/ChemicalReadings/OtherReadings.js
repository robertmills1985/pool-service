import React, { Component } from 'react';

var noValue = 'Enter a value first to save!';

class OtherReadings extends Component {
	constructor() {
		super();

		this.state = {};
	}

	handleTDS() {
		if (document.getElementById('tds-reading').value) {
			var tds = document.getElementById('tds-reading').value;
			this.setState({
				tds: 'TDS is at ' + tds + ' ppm'
			});
		} else {
			alert(noValue);
		}
	}
	handleSalt() {
		if (document.getElementById('salt-reading').value) {
			var salt = document.getElementById('salt-reading').value;
			this.setState({
				salt: 'Salt is at ' + salt + ' ppm'
			});
		} else {
			alert(noValue);
		}
	}
	handleTemp() {
		if (document.getElementById('temp-reading').value) {
			var temp = document.getElementById('temp-reading').value;
			this.setState({
				temp: 'Tempature is at ' + temp + ' degrees'
			});
		} else {
			alert(noValue);
		}
	}
	handlePhos() {
		if (document.getElementById('phos-reading').value) {
			var phos = document.getElementById('phos-reading').value;
			this.setState({
				phos: 'Phos is at ' + phos + ' ppm'
			});
		} else {
			alert(noValue);
		}
	}
	handleCalc() {
		if (document.getElementById('calc-reading').value) {
			var calc = document.getElementById('calc-reading').value;
			this.setState({
				calc: 'Calcium is at ' + calc + ' ppm'
			});
		} else {
			alert(noValue);
		}
	}
	handleCya() {
		if (document.getElementById('cya-reading').value) {
			var cya = document.getElementById('cya-reading').value;
			this.setState({
				cya: 'Cyanuric is at ' + cya + ' ppm'
			});
		} else {
			alert(noValue);
		}
	}
	handlePres() {
		if (document.getElementById('pres-reading').value) {
			var pres = document.getElementById('pres-reading').value;
			this.setState({
				pres: 'Filter pressure is at ' + pres + ' psi'
			});
		} else {
			alert(noValue);
		}
	}
	handleComments() {
		if (document.getElementById('comments').value) {
			var comments = document.getElementById('comments').value;
			this.setState({
				comments: 'Service notes: ' + comments
			});
		} else {
			alert(noValue);
		}
	}
	render() {
		return (
			<div class="chem-panel">
				<div>
					<input id="tds-reading" type="text" placeholder="TDS" />
					<button onClick={() => this.handleTDS()}>Save</button>
					<input id="salt-reading" type="text" placeholder="Salinity" />
					<button onClick={() => this.handleSalt()}>Save</button>
					<input id="temp-reading" type="text" placeholder="Temperature" />
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
					<h4>Comments: </h4>
					<textarea id="comments" />
					<button onClick={() => this.handleComments()}>Save</button>
				</div>
				<div hidden>
					<h4>Readings</h4>
					<p id="tds-readings">{this.state.tds}</p>
					<p id="salt-readings">{this.state.salt}</p>
					<p id="temp-readings">{this.state.temp}</p>
					<p id="phos-readings">{this.state.phos}</p>
					<p id="calc-readings">{this.state.calc}</p>
					<p id="cya-readings">{this.state.cya}</p>
					<p id="pres-readings">{this.state.pres}</p>
					<p id="commented">{this.state.comments}</p>
				</div>
			</div>
		);
	}
}

export default OtherReadings;
