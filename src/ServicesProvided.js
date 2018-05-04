import React, { Component } from 'react';

class ServicesProvided extends Component {
    constructor(){
        super()

        this.state = {}
    }
	render() {
		return (
			<div>
				<h1>Services Provided</h1>
				<div>
					<ul>
                        <li><button>Vacuumed</button></li>
                        <li><button>Emptied Baskets</button></li>
                        <li><button>Skimmed</button></li>
                        <li><button>Brushed</button></li>
                        <li><button>Back Washed</button></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default ServicesProvided;
