import React from 'react';

const Services = (props) => (
	<div>
		<h1>Services</h1>
		<ul>
			<li>
				<label>
					<h3>Skimmed</h3>
					<input type="checkbox" />
				</label>
			</li>
			<li>
				<label>
					<h3>Brushed</h3>
					<input type="checkbox" />
				</label>
			</li>
			<li>
				<label>
					<h3>Emptied all baskets and canisters</h3>
					<input type="checkbox" />
				</label>
			</li>
		</ul>
		<button>Submit</button>
	</div>
);

export default Services;
