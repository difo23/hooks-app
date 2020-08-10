import React from 'react';
import useCounter from '../Customs/hooks/useCounter';

const Counter = ({ inicialCount, step }) => {
	const { state, increment, decrement, reset } = useCounter({ inicialCount });

	return (
		<div>
			<h2>Counter = {state}</h2>

			<button onClick={() => increment(step)}>Incremente +{step}</button>
			<button onClick={() => reset(step)}>Reset ={inicialCount}</button>
			<button onClick={() => decrement(step)}>Decremente -{step}</button>
		</div>
	);
};

Counter.defaultProps = {
	step: 1,
	inicialCount: 0
};

export default Counter;
