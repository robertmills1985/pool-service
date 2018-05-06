import React, { Component } from 'react';
import './App.css';

class ServicesProvided extends Component {
	constructor() {
		super();

		this.state = {
			vac: false,
			baskets: false,
			skimmed: false,
			brushed: false,
			backwashed: false
		};
	}
	handleVac() {
		if (this.state.vac === false) {
			this.setState({
				vac: true
			});
		} else if (this.state.vac === true) {
			this.setState({
				vac: false
			});
		}
	}
	handleBaskets() {
		if (this.state.baskets === false) {
			this.setState({
				baskets: true
			});
		} else if (this.state.baskets === true) {
			this.setState({
				baskets: false
			});
		}
	}
	handleSkimmed() {
		if (this.state.skimmed === false) {
			this.setState({
				skimmed: true
			});
		} else if (this.state.skimmed === true) {
			this.setState({
				skimmed: false
			});
		}
	}
	handleBrushed() {
		if (this.state.brushed === false) {
			this.setState({
				brushed: true
			});
		} else if (this.state.brushed === true) {
			this.setState({
				brushed: false
			});
		}
	}
	handleBackwashed() {
		if (this.state.backwashed === false) {
			this.setState({
				backwashed: true
			});
		} else if (this.state.backwashed === true) {
			this.setState({
				backwashed: false
			});
		}
	}
	render() {
		return (
			<div class="sub-panel">
				<h1>Services Provided</h1>
				<div>
					<ul>
						<li
							id="vac"
							class="service-btn"
							onClick={() =>this.handleVac()}
						>
							Vacuumed
						</li>
						<li
							id="baskets"
							class="service-btn"
							onClick={() => this.handleBaskets()}
						>
							Emptied Baskets
						</li>
						<li
							id="skimmed"
							class="service-btn"
							onClick={() => this.handleSkimmed()}
						>
							Skimmed
						</li>
						<li
							id="brushed"
							class="service-btn"
							onClick={() => this.handleBrushed()}
						>
							Brushed
						</li>
						<li
							id="back-washed"
							class="service-btn"
							onClick={() => this.handleBackwashed()}
						>
							Back Washed
						</li>
					</ul>
				</div>
				<div hidden>
					<p id='vac'>{JSON.stringify(this.state.vac)}</p>
					<p id='baskets'>{JSON.stringify(this.state.baskets)}</p>
					<p id='skimmed'>{this.state.skimmed}</p>
					<p id='brushed'>{this.state.brushed}</p>
					<p id='backwashed'>{this.state.backwashed}</p>
					<p id='brushed'>{this.state.brushed}</p>
				</div>
			</div>
		);
	}
}

export default ServicesProvided;
