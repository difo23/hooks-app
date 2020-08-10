import React, { useState } from 'react';

import '../../component.css';

const EjempUseEffect = () => {
	const [ state, setstate ] = useState({ name: '', email: '' });

	let { name, email } = state;

	
	const handleChange = ({ target }) => {
		setstate({
			...state,
			[target.name]: target.value
		});
	};

	return (
		<div>
			<h1> EjempUseEffect</h1>
			<hr />
			<div>
				<input type="text" name="name" id="name" placeholder="Name" onChange={handleChange} />

				<input type="text" name="email" id="email" placeholder="Email" onChange={handleChange} />
				<div>
					<button onClick={handleChange}> Enviar</button>
				</div>
			</div>
		</div>
	);
};

export default EjempUseEffect;
