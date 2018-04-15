import React, { Component } from 'react';
import './App.css';

class ChemReadings extends Component {
	constructor() {
		super();

		this.state = {};
	}

	chl1() {
		this.setState({
			chl: 1
		});
    }
    chl2(){
        this.setState({
            chl:2
        })
    }

	render() {
		return (
			<div>
				<div class="chem-panel">
					<h1>Chem Readings</h1>
					<p>Chl: </p>
					<button onClick={() => this.chl1()}>1</button>
					<button onClick={()=>this.chl2()} >2</button>
					<button>3</button>
					<button>4</button>
					<button>5</button>
					<p>Results:</p>
					<p id='chl-results' >{this.state.chl}</p>
                    <button onClick={this.props.handleSubmit} >Submit</button>
				</div>
			</div>
		);
	}
}

export default ChemReadings;
