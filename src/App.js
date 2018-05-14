import React, { Component } from 'react';
import ChemReadings from './ChemicalReadings/ChemReadings';
import ServicesProvided from './ServicesProvided/ServicesProvided';
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

		var vac = document.getElementById('vac-results').innerHTML;
		var baskets = document.getElementById('baskets-results').innerHTML;
		var skimmed = document.getElementById('skimmed-results').innerHTML;
		var brushed = document.getElementById('brushed-results').innerHTML;
		var backWashed = document.getElementById('backwashed-results').innerHTML;

		var chemIndex = [ chl, ph, alk, tds, salt, temp, phos, calc, cya, pres, comments ];
		var servicesIndex = [ vac, baskets, skimmed, brushed, backWashed ];
		var finalReport = [];
		//console.log(servicesIndex)

		for (var i = 0; i < chemIndex.length; i++) {
			if (chemIndex[i] !== '') {
				finalReport.push(chemIndex[i]);
			}
		}

		for (var x = 0; x < servicesIndex.length; x++) {
			if (servicesIndex[x] !== '') {
				finalReport.push(servicesIndex[x]);
			}
		}
		this.setState({
			finalReport: finalReport
		});
		
		
		//		if(chl != "" && ph != "" && alk != ""){
		//
		//			this.setState({
		//				chemical:{
		//					chl:chl,
		//					ph:ph,
		//					alk:alk,
		//					tds:tds,
		//					salt:salt,
		//					temp:temp,
		//					phos:phos,
		//					calc:calc,
		//					cya:cya,
		//					pres:pres,
		//					comments:comments
		//
		//				},
		//				services:{
		//					vac:vac,
		//					baskets:baskets,
		//					skimmed:skimmed,
		//					brushed:brushed,
		//					backwashed:backWashed
		//				}
		//			})
		//		}else{
		//			alert('A value for Chl, pH and Alk must be entered to continue')
		//		}
		//
	}

	render() {
		return (
			<div>
				<ChemReadings />
				<ServicesProvided />
				<Inventory />
				<div class="sub-panel">
					<button class="sbmt-btn" onClick={() => this.handleSubmit()}>
						Submit
					</button>
				</div>
				<div class="final-report">
					<h1>Final Report</h1>
					<ul></ul>
				</div>
			</div>
		);
	}
}

export default App;
