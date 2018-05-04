import React, { Component } from 'react';
import './App.css';

class ServicesProvided extends Component {
	constructor() {
		super();

		this.state = {};
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
							onClick={() => alert(document.getElementById('vac').innerHTML)}
						>
							Vacuumed
						</li>
						<li
							id="baskets"
							class="service-btn"
							onClick={() => alert(document.getElementById('baskets').innerHTML)}
						>
							Emptied Baskets
						</li>
						<li
							id="skimmed"
							class="service-btn"
							onClick={() => alert(document.getElementById('skimmed').innerHTML)}
						>
							Skimmed
						</li>
						<li
							id="brushed"
							class="service-btn"
							onClick={() => alert(document.getElementById('brushed').innerHTML)}
						>
							Brushed
						</li>
						<li
							id="back-washed"
							class="service-btn"
							onClick={() => alert(document.getElementById('back-washed').innerHTML)}
						>
							Back Washed
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default ServicesProvided;
