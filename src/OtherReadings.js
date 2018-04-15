import React, { Component } from 'react';

class OtherReadings extends Component {
	constructor() {
		super();

		this.state = {};
    }
    handleTDS(){
        var tds= document.getElementById('tds-reading').value 
        this.setState({
            tds:'TDS is at ' + tds
        })
    }
    handleSalt(){
        var salt= document.getElementById('salt-reading').value 
        this.setState({
            salt:'Salt is at ' + salt
        })
    }
	render() {
		return (
			<div class="chem-panel">
				<div>
					<input id="tds-reading" type="text" placeholder="TDS" />
					<button onClick={()=>this.handleTDS()} >Save</button>
					<input id="salt-reading" type="text" placeholder="Salinity" />
					<button onClick={()=>this.handleSalt()}>Save</button>
					<input id="temp-reading" type="text" placeholder="Teampature" />
					<button  >Save</button>
					<input id="phos-reading" type="text" placeholder="Phospahtes" />
					<button>Save</button>
					<input id="calc-reading" type="text" placeholder="Calcium" />
					<button>Save</button>
					<input id="cya-reading" type="text" placeholder="Cyanuric" />
					<button>Save</button>
				</div>
				<div>
					<input id="pres-reading" type="text" placeholder="Pressure" />
					<button>Save</button>
				</div>
				<div>
					<h4>Readings</h4>
					<p>{this.state.tds}</p>
					<p>{this.state.salt}</p>
					<p>{this.state.temp}</p>
					<p>{this.state.phos}</p>
					<p>{this.state.calc}</p>
					<p>{this.state.cya}</p>
					<p>{this.state.pres}</p>
				</div>
			</div>
		);
	}
}

export default OtherReadings;
