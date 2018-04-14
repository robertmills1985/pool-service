import React, { Component } from 'react';
import ServiceReport from './ServiceReport/ServiceReport';
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<ServiceReport />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
