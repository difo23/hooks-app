import React, { useState } from 'react';
import AppRouter from './AppRouter'
import UserContext from './UserContext';

const ContextApp = () => {


	const [user, setuser] = useState({});

	
	return (
		<div>

		<UserContext.Provider value={{ user, setuser }}>
        	<AppRouter />
		</UserContext.Provider>
		</div>
	);
};

export default ContextApp;
