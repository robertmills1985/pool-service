import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
const chlReading = (props) => (
	<div id="chl">
		<h1>Chl</h1>
		<button onClick={props.b1}>Below 1</button>
		<button onClick={props.chl1}>1</button>
		<button onClick={props.chl2}>2</button>
		<button onClick={props.chl3}>3</button>
		<button onClick={props.chl4}>4</button>
		<button onClick={props.chl5}>5</button>
		<button onClick={props.a5}>Above 5</button>
		<button onClick={props.a10}>Above 10</button>
		<button onClick={props.a20}>Above 20</button>
	</div>
);

const pHReading = (props) => (
	<div id="pH">
		<h1>pH</h1>
		<button>Below 7.2</button>
		<button>7.2</button>
		<button>7.4</button>
		<button>7.6</button>
		<button>7.8</button>
		<button>Above 7.8</button>
	</div>
);

const alkReading = (props) => (
	<div id="alk">
		<h1>Alk</h1>
		<button>Below 80</button>
		<button>80</button>
		<button>90</button>
		<button>100</button>
		<button>110</button>
		<button>120</button>
		<button>Above 120</button>
	</div>
);

const AdditionalReadings = (props) => (
	<div id="add">
		<h1>Add another reading?</h1>
		<button>Pressure</button>
		<button>Cyanuric</button>
		<button>Calcium</button>
		<button>TDS</button>
		<button>Salt</button>
		<button>Phosphates</button>
		<button>Submit</button>
	</div>
);
const ChemReadings = (props) => (
	<div>
		<BrowserRouter>
			<div>
				<Route path="/serviceform/chemreadings/chl" component={chlReading} />
				<Route path="/serviceform/chemreadings/pH" component={pHReading} />
				<Route path="/serviceform/chemreadings/alk" component={alkReading} />
                <Route path='/serviceform/chemreadings/anythingelse' component={AdditionalReadings} />
			</div>
		</BrowserRouter>
	</div>
);

export default ChemReadings;
