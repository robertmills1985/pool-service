import React from 'react';

const AdditionalChems = (props) => (
	<div>
		<h1>Additional Chems</h1>
		<div>
			<button>BiCarb</button>
			<button>BiSulfate</button>
			<button>Cya</button>
			<button>D.E.</button>
			<button>Algaecide</button>
			<button>Salt</button>
			<button>Submit</button>
		</div>
	</div>
);

const ChemsAdded = (props) => (
	<div>
		<ul>
			<li>
				<h2>Tabs</h2>
				<input type="text" />
			</li>
			<li>
				<h2>Acid</h2>
				<input type="text" />
                <p>gallons</p>
			</li>
		</ul>
        <AdditionalChems />
	</div>
);

export default ChemsAdded;
