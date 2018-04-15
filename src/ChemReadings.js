import React, { Component } from 'react';
import './App.css';

const ChlReadings = (props) => (
	<div>
		<h4>Chl: </h4>
		<button onClick={props.handleChlB1}>Below 1 ppm</button>
		<button onClick={props.handleChl1}>1</button>
		<button onClick={props.handleChl2}>2</button>
		<button onClick={props.handleChl3}>3</button>
		<button onClick={props.handleChl4}>4</button>
		<button onClick={props.handleChl5}>5</button>
		<button onClick={props.handleChlA1}>Above 5 ppm</button>
		<button onClick={props.handleChlA10}>Above 10 ppm</button>
		<button onClick={props.handleChlA20}>Above 20 ppm</button>
	</div>
);
const PHReadings = (props) => (
	<div>
		<h4>pH: </h4>
		<button onClick={props.handlepHB72}>Below 7.2</button>
		<button onClick={props.handlepH72}>7.2</button>
		<button onClick={props.handlepH74}>7.4</button>
		<button onClick={props.handlepH76}>7.6</button>
		<button onClick={props.handlepH78}>7.8</button>
		<button onClick={props.handlepHA78}>Above 7.8</button>
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

	render() {
		return (
			<div>
				<div class="chem-panel">
                <h1>Chem Readings</h1>
					<ChlReadings
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
						handlepHB72={() => this.pHB72()}
						handlepH72={() => this.pH72()}
						handlepH74={() => this.pH74()}
						handlepH76={() => this.pH76()}
						handlepH78={() => this.pH78()}
						handlepHA78={() => this.pHA78()}
					/>
					<p>Results:</p>
					<p id="chl-results">{this.state.chl}</p>
                    <p id='ph-results'>{this.state.ph}</p>
					<button onClick={this.props.handleSubmit}>Submit Results</button>
				</div>
			</div>
		);
	}
}

export default ChemReadings;
