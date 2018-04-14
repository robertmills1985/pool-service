import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ChlReadings from './components/ChemTest/ChlReading';
import PHReadings from './components/ChemTest/PHReading';
import AlkReadings from './components/ChemTest/AlkReadings';
import ChlReading from './components/ChemTest/ChlReading';
import AnythingElse from './components/ChemTest/AdditionalReadings/Anythingelse';

var chlReadings = [ 'Below 1', '1', '2', '3', '4', '5', 'Above 5', 'Above 10', 'Above 20' ];
var pHReadings = [ 'Below 7.2', '7.2', '7.4', '7.6', '7.8', 'Above 7.8' ];
var alkReadings = [ 'Below 80', '80', '90', '100', '110', '120', 'Above 120' ];

//features: Record chems and inventory. Provide a saturation index result if enough info is entered.
//			Easy to use and quick UI. Salt Calculator. Saturation index results will recommend treatment for perfect
//			balance. 
//			

class ServiceReport extends Component {
	constructor() {
		super();

		this.state = {};
	}
	b1() {
		this.setState({
			chl:chlReadings[0]
		})
	}
	chl1() {
		this.setState({
			chl:chlReadings[1]
		})
	}
	chl2() {
		this.setState({
			chl:chlReadings[2]
		})
	}
	chl3() {
		this.setState({
			chl:chlReadings[3]
		})
	}
	chl4() {
		this.setState({
			chl:chlReadings[4]
		})
	}
	chl5() {
		this.setState({
			chl:chlReadings[5]
		})
	}
	a5() {
		this.setState({
			chl:chlReadings[6]
		})
	}
	a10() {
		this.setState({
			chl:chlReadings[7]
		})
	}
	a20() {
		this.setState({
			chl:chlReadings[8]
		})
	}
	pHB72() {
		this.setState({
			ph:pHReadings[0]
		})
	}
	pH72() {
		this.setState({
			ph:pHReadings[1]
		})
	}
	pH74() {
		this.setState({
			ph:pHReadings[2]
		})
	}
	pH76() {
		this.setState({
			ph:pHReadings[3]
		})
	}
	pH78() {
		this.setState({
			ph:pHReadings[4]
		})
	}
	pHA78() {
		alert('hey')
		this.setState({
			ph:pHReadings[5]
		})
	}
	render() {
		return (
			<div>
				<div>
					<ChlReadings
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

					<PHReadings
						pHB72={() => this.pHB72()}
						pH72={() => this.pH72()}
						pH74={() => this.pH74()}
						pH76={() => this.pH76()}
						pH78={() => this.pH78()}
						pHA78={() => this.pHA78()}
					/>
					<AlkReadings />
					<div>
						<ul>
							<li>Chl: {this.state.chl}</li>
							<li>pH: {this.state.ph}</li>
							<li>Alk: {this.state.alk}</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ServiceReport;
