import React, { useContext } from 'react';

import UserContext from './UserContext';

import { useHistory } from "react-router-dom";

const Login = () => {

	let history = useHistory();

	const {user, setuser} = useContext(UserContext)



	let userLoged = {
		email: 'manolorodriguez@gmail.com',
		logged: true,
		userName: 'Manolo69'
	}


	const login = (event) => {
		if (Object.entries(user).length === 0){
			setuser(userLoged);
		}else if(user.logged){
			console.log('User was logged')
		} else{
			setuser({...user, logged: true});
		}

		history.push('/board');

	}


	return (
		<div>
			

			<button className= 'btn btn-outline-primary' onClick= {login}> Login</button>
		</div>
	);
};

export default Login;
