import React from 'react';
import ReactDOM from 'react-dom';
import LikesApp from './components/Apps/LikesApp';
import ContextApp from './components/Apps/ContextApp';
import './component.css';

ReactDOM.render(
	<div className="container">

	<h1>Learning about hooks in react</h1>
	<hr/>
		<div >
			<h3> Project #1 100daysofcode: Comments likes with react useState and useEffect hooks</h3>
			<hr />
			<LikesApp />
		</div> 

		<div >
			<h3> Project #2 100daysofcode: Simple login with router-dom, useState, useContext, useHistory hooks in react</h3>
			<hr />
			<ContextApp />
		</div>
		<hr/>
	</div>
	document.getElementById('root')
);
