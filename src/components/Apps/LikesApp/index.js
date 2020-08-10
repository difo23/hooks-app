import React, { useState, useEffect } from 'react';



/** Simulate de user that clic in like button*/
const getUser = () => {
    const USERS = [ 'Juan', 'Pedro', 'Josefa', 'Ramón', 'Penelope', 'Alexander', 'Manolo', 'Carmen' ];
    const RANDOM = Math.floor(Math.random() * USERS.length);
    return USERS[RANDOM];
};


/** Switch between  the options for likes counter.*/
const getCounter = (likes) => {
    if (likes.length === 0) return "Sorry, this doesn't like to anybody!";

    let first, second, thirth, rest;

    switch (likes.length) {
        case 1:
            [ first ] = likes;
            return `${first} likes this!`;

        case 2:
            [ first, second ] = likes;
            return `${first} and ${second} like this!`;

        case 3:
            [ first, second, thirth ] = likes;
            return `${first}, ${second} and ${thirth} like this!`;

        default:
            [ first, second, ...rest ] = likes;
            return `${first}, ${second} and ${rest.length} others like this!`;
    }
};

/** Like App component */
const LikesApp = () => {
    
    
    const [ likes, setLikes ] = useState([]);
	const [ counter, setCounter ] = useState('');

    
/* useEffect only change de string counter likes when likes array change*/
	useEffect(
		() => {
			const count = getCounter(likes);
			setCounter(count);
		},
		[ likes ]
	);

	const handleOnclick = (event) => {
		const user = getUser();
		if (!likes.includes(user)) {
			setLikes([ ...likes, user ]);
		}
	};

	return (
		<div className="container">
			<div className="card border-info mb-3" style={{ maxWidth: '18rem' }}>
				<div className="card-header">Comments</div>
				<div className="card-body text-info">
					<h5 className="card-title">Likes with react hooks</h5>
					<p className="card-text">
						With this app you can learn how make react useState hook functionality, this counter likes can
						be shown seem to twitter likes.
					</p>
					<div className="row">
						<div className="col-sm-2">
							<i name="like" onClick={handleOnclick} className="btn btn-outline-info fas fa-heart" />
						</div>
						<div className="col-sm ml-1">
							<span> {counter}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LikesApp;
