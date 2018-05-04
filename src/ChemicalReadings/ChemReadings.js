import React, { Component } from 'react';
import OtherReadings from './OtherReadings';
import '../App.css';

const ChlReadings = (props) => (
	<div>
		<h4>Chl: {props.reading}</h4>
		<p class="chem-btn" onClick={props.handleChlB1}>
			Below 1 ppm
		</p>
		<p class="chem-btn" onClick={props.handleChl1}>
			1
		</p>
		<p class="chem-btn" onClick={props.handleChl2}>
			2
		</p>
		<p class="chem-btn" onClick={props.handleChl3}>
			3
		</p>
		<p class="chem-btn" onClick={props.handleChl4}>
			4
		</p>
		<p class="chem-btn" onClick={props.handleChl5}>
			5
		</p>
		<p class="chem-btn" onClick={props.handleChlA5}>
			Above 5 ppm
		</p>
		<p class="chem-btn" onClick={props.handleChlA10}>
			Above 10 ppm
		</p>
		<p class="chem-btn" onClick={props.handleChlA20}>
			Above 20 ppm
		</p>
	</div>
);
const PHReadings = (props) => (
	<div>
		<h4>pH: {props.reading} </h4>
		<p class="chem-btn" onClick={props.handlepHB72}>
			Below 7.2
		</p>
		<p class="chem-btn" onClick={props.handlepH72}>
			7.2
		</p>
		<p class="chem-btn" onClick={props.handlepH74}>
			7.4
		</p>
		<p class="chem-btn" onClick={props.handlepH76}>
			7.6
		</p>
		<p class="chem-btn" onClick={props.handlepH78}>
			7.8
		</p>
		<p class="chem-btn" onClick={props.handlepHA78}>
			Above 7.8
		</p>
	</div>
);
const AlkReadings = (props) => (
	<div>
		<h4>Alk: {props.reading}</h4>
		<p class="chem-btn" onClick={props.handleAlkB80}>
			Below 80
		</p>
		<p class="chem-btn" onClick={props.handleAlk80}>
			80
		</p>
		<p class="chem-btn" onClick={props.handleAlk90}>
			90
		</p>
		<p class="chem-btn" onClick={props.handleAlk100}>
			100
		</p>
		<p class="chem-btn" onClick={props.handleAlk110}>
			110
		</p>
		<p class="chem-btn" onClick={props.handleAlk120}>
			120
		</p>
		<p class="chem-btn" onClick={props.handleAlkA120}>
			Above 120
		</p>
	</div>
);

class ChemReadings extends Component {
	constructor() {
		super();
		this.state = {};
	}
	pHB72() {
		this.setState({
			ph: 'Below 7.2'
		});
	}
	pH72() {
		this.setState({
			ph: '7.2'
		});
	}
	pH74() {
		this.setState({
			ph: '7.4'
		});
	}
	pH76() {
		this.setState({
			ph: '7.6'
		});
	}
	pH78() {
		this.setState({
			ph: '7.8'
		});
	}
	pHA78() {
		this.setState({
			ph: 'Above 7.8'
		});
	}

	chl1() {
		this.setState({
			chl: '1 ppm'
		});
	}
	chl2() {
		this.setState({
			chl: '2 ppm'
		});
	}
	chl3() {
		this.setState({
			chl: '3 ppm'
		});
	}
	chl4() {
		this.setState({
			chl: '4 ppm'
		});
	}
	chl5() {
		this.setState({
			chl: '5 ppm'
		});
	}
	chlA5() {
		this.setState({
			chl: 'Above 5 ppm'
		});
	}
	chlA10() {
		this.setState({
			chl: 'Above 10 ppm'
		});
	}
	chlA20() {
		this.setState({
			chl: 'Above 20 ppm'
		});
	}
	chlB1() {
		this.setState({
			chl: 'Below 1 ppm'
		});
	}
	alkB80() {
		this.setState({
			alk: 'Below 80 ppm'
		});
	}
	alk80() {
		this.setState({
			alk: '80 ppm'
		});
	}
	alk90() {
		this.setState({
			alk: '90 ppm'
		});
	}
	alk100() {
		this.setState({
			alk: '100 ppm'
		});
	}
	alk110() {
		this.setState({
			alk: '110 ppm'
		});
	}
	alk120() {
		this.setState({
			alk: '120 ppm'
		});
	}
	alkA120() {
		this.setState({
			alk: 'Above 120 ppm'
		});
	}
	render() {
		return (
			<div>
				<div class="sub-panel">
					<h1>Chem Readings</h1>
					<ChlReadings
						reading={this.state.chl}
						handleChlB1={() => this.chlB1()}
						handleChl1={() => this.chl1()}
						handleChl2={() => this.chl2()}
						handleChl3={() => this.chl3()}
						handleChl4={() => this.chl4()}
						handleChl5={() => this.chl5()}
						handleChlA5={() => this.chlA5()}
						handleChlA10={() => this.chlA10()}
						handleChlA20={() => this.chlA20()}
					/>
					<PHReadings
						reading={this.state.ph}
						handlepHB72={() => this.pHB72()}
						handlepH72={() => this.pH72()}
						handlepH74={() => this.pH74()}
						handlepH76={() => this.pH76()}
						handlepH78={() => this.pH78()}
						handlepHA78={() => this.pHA78()}
					/>
					<AlkReadings
						reading={this.state.alk}
						handleAlkB80={() => this.alkB80()}
						handleAlk80={() => this.alk80()}
						handleAlk90={() => this.alk90()}
						handleAlk100={() => this.alk100()}
						handleAlk110={() => this.alk110()}
						handleAlk120={() => this.alk120()}
						handleAlkA120={() => this.alkA120()}
					/>
					<div hidden>
						<p>Results:</p>
						<p id="chl-results">{this.state.chl}</p>
						<p id="ph-results">{this.state.ph}</p>
						<p id="alk-results">{this.state.alk}</p>
					</div>
					<OtherReadings />
					<button onClick={this.props.handleSubmit}>Submit Results</button>
				</div>
			</div>
		);
	}
}

export default ChemReadings;
