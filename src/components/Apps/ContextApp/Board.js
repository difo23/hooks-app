import React, { useContext } from 'react'
import GrandchildComponent from './GrandchildComponent';
import UserContext from './UserContext';

import { useHistory } from "react-router-dom";

export const Board = () => {
    const {user, setuser} = useContext(UserContext);
    let history = useHistory();


    if (Object.entries(user).length === 0) history.push('/'); 


	const logout = (event) => {
		
            setuser({...user, logged: false});
            history.push('/');
	}


	return (
		<div>
			<GrandchildComponent />

			<button className= 'btn btn-outline-primary' onClick= {logout}> Logout</button>
		</div>
	);
}


export default Board;