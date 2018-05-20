import React, { Component } from 'react';
import '../App.css';

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
				vac: "Vaccumed. "
			});
		} else if (this.state.vac === "Vaccumed. ") {
			this.setState({
				vac: false
			});
		}
	}
	handleBaskets() {
		if (this.state.baskets === false) {
			this.setState({
				baskets: "Emptied Basekts. "
			});
		} else if (this.state.baskets === "Emptied Basekts. ") {
			this.setState({
				baskets: false
			});
		}
	}
	handleSkimmed() {
		if (this.state.skimmed === false) {
			this.setState({
				skimmed: "Skimmed. "
			});
		} else if (this.state.skimmed === "Skimmed. ") {
			this.setState({
				skimmed: false
			});
		}
	}
	handleBrushed() {
		if (this.state.brushed === false) {
			this.setState({
				brushed: "Brushed. "
			});
		} else if (this.state.brushed === "Brushed. ") {
			this.setState({
				brushed: false
			});
		}
	}
	handleBackwashed() {
		if (this.state.backwashed === false) {
			this.setState({
				backwashed: "Backwashed. "
			});
		} else if (this.state.backwashed === "Backwashed. ") {
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
				<div  hidden>
					<p id='vac-results'>{(this.state.vac)}</p>
					<p id='baskets-results'>{(this.state.baskets)}</p>
					<p id='skimmed-results'>{(this.state.skimmed)}</p>
					<p id='brushed-results'>{(this.state.brushed)}</p>
					<p id='backwashed-results'>{(this.state.backwashed)}</p>
					<p id='brushed-results'>{(this.state.brushed)}</p>
				</div>
			</div>
		);
	}
}

export default ServicesProvided;
