import React, { useContext } from 'react';

import UserContext from './UserContext';

const GrandchildComponent = () => {
	const { user } = useContext(UserContext);


	return (
		<div>
			<h1> Hola! {user.email} </h1>
		</div>
	);
};

export default GrandchildComponent;
