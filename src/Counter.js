import React, {useState} from 'react';

function Counter(props) {

    return (
        <div className="counter">
            {props.counter}
        </div>
    );
}

export default Counter;