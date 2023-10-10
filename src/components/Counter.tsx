import React, { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
	const [ count, setCount ] = useState<number>( 0 );

	const incr = () => {
		setCount( count + 1 )
	}

	return (
		<div>
			<h1>{ count }</h1>
			<button onClick={ incr } className={ classes.button }>incr</button>
		</div>
	);
};
