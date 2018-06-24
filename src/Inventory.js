import React, { Component } from 'react';

class Inventory extends Component {
	constructor() {
		super();

		this.state = {};
	}
	handleInvSave() {
		var tabs = document.getElementById('tabs-used').value;
		var acid = document.getElementById('acid-used').value;
		var bicarb = document.getElementById('bicarb-used').value;
		var bisulfate = document.getElementById('bisulfate-used').value;

		this.setState({
			tabs:tabs + " tabs were added.",
			acid:acid + " gallons of acid were added. ",
			bicarb:bicarb + " lbs of bicarb. ",
			bisulfate:bisulfate + " lbs of bisulfate were added. "
		})
		
		
	}
	render() {
		return (
			<div class="sub-panel">
				<h1>Inventory Used</h1>
				<ul>
					<li>
						{' '}
						<input id="tabs-used" type="text" placeholder="tabs" />
					</li>
					<li>
						{' '}
						<input id="acid-used" type="text" placeholder="acid" />
					</li>
					<li>
						{' '}
						<input id="bicarb-used" type="text" placeholder="bicarb" />
					</li>
					<li>
						{' '}
						<input id="bisulfate-used" type="text" placeholder="bisulfate" />
					</li>
				</ul>
				<button onClick={() => this.handleInvSave()}>Save</button>
				<div hidden>
					<p id='tu' >{this.state.tabs}</p>
					<p id='au' >{this.state.acid}</p>
					<p id='cu' >{this.state.bicarb}</p>
					<p id='su' >{this.state.bisulfate}</p>
				</div>
			</div>
		);
	}
}

export default Inventory;
