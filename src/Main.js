import React, {useState} from 'react';
import Counter from "./Counter";
import Buttons from "./Buttons";

function Main(props) {
    const [counter, setCounter] = useState(0);
    return (
        <div className="wrap main">
            <Counter counter={counter}/>
            <Buttons counter={counter} setCounter={setCounter}/>
        </div>
    );
}

export default Main;