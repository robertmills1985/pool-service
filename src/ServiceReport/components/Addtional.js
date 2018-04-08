import React from 'react';

const Additional = (props) => (
	<div>
		<div>
			<h1>Additional Services</h1>
			<ul>
				<li>
					<label>
						Backwashed
						<input type="checkbox" />
					</label>
				</li>
				<li>
					<label>
						Vacuumed
						<input type="checkbox" />
					</label>
				</li>
				<li>
					<label>
						Cleaned Salt Cell
						<input type="checkbox" />
					</label>
				</li>
				<li>
					<label>
						Cleared blockage from Impellar
						<input type="checkbox" />
					</label>
				</li>
				<li>
					<label>
						Cleared blockage from Cleaner
						<input type="checkbox" />
					</label>
				</li>
				<li>
					<label>
						Cleared blockage from pop-up screen
						<input type="checkbox" />
					</label>
				</li>
				<li>
					<label>
						Lubed backwash piston o-rings
						<input type="checkbox" />
					</label>
				</li>
				<li>
					<label>
						Lubed pump lid o-ring
						<input type="checkbox" />
					</label>
				</li>
			</ul>
			<button>Submit</button>
		</div>
	</div>
);

export default Additional;
