import React from 'react';
import ReactDOM from 'react-dom';
import LikesApp from './components/Apps/LikesApp';
import './component.css';

ReactDOM.render(
	<div className="container">
		<div className="row">
			<h1> Project #1 100daysofcode: Comments likes with react hooks</h1>
			<hr />
			<LikesApp />
		</div>
	</div>,
	document.getElementById('root')
);
