import React, { useState } from 'react';

const CounterButton = () => {

    const [count, setCount] = useState(0);

    const handleClick = event => {
        event.preventDefault();
        setCount(count + 1)
    }

    return (
        <button
            // id='counter'
            // color={props.color}
            onClick={handleClick}>
            Count: {count}
        </button>

    )
}


export default CounterButton
