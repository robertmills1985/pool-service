import React, { Component } from 'react';
import ChemReadings from './components/ChemReadings';
import Services from './components/Services';
import Additional from './components/Addtional';

var chlReadings = [ 'Below 1', '1', '2', '3', '4', '5', 'Above 5', 'Above 10', 'Above 20' ];

class ServiceReport extends Component {
	constructor() {
		super();

		this.state = {};
	}
	b1() {
		alert(chlReadings[0]);
	}
	chl1() {
		alert(chlReadings[1]);
	}
	chl2() {
		alert(chlReadings[2]);
	}
	chl3() {
		alert(chlReadings[3]);
	}
	chl4() {
		alert(chlReadings[4]);
	}
	chl5() {
		alert(chlReadings[5]);
	}
	a5() {
		alert(chlReadings[6]);
	}
	a10() {
		alert(chlReadings[7]);
	}
	a20() {
		alert(chlReadings[8]);
	}
	render() {
		return (
			<div>
				<ChemReadings
					b1={() => this.b1()}
					chl1={() => this.chl1()}
					chl1={() => this.chl1()}
					chl2={() => this.chl2()}
					chl3={() => this.chl3()}
					chl4={() => this.chl4()}
					chl5={() => this.chl5()}
					a5={() => this.a5()}
					a10={() => this.a10()}
					a20={() => this.a20()}
				/>
				<Services />
				<Additional />
			</div>
		);
	}
}
export default ServiceReport;
