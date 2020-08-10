import { useState } from 'react';

const useCounter = ({ inicialCount }) => {
	const [ state, setState ] = useState(inicialCount);

	const increment = (step = 1) => {
		setState(state + step);
	};
	const decrement = (step = 1) => {
		setState(state - step);
	};

	const reset = (step = 1) => {
		setState(inicialCount);
	};

	return {
		state,
		increment,
		decrement,
		reset
	};
};

export default useCounter;
