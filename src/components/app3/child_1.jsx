import React from 'react';

const Child1 = (props) => {
    
    return(
        <>
            <button onClick={props.increment}>+1</button>
            <button onClick={props.decrement}>-1</button>
        </>
    );
}

export default Child1;