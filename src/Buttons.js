import React from 'react';
function Buttons(props) {
    function plus(){
        const x = props.counter +1;
        props.setCounter(x)
    }
    function minus(){
        if (props.counter > 0){
            const x = props.counter -1;
            props.setCounter(x)
        }
    }
    function reset(){
        props.setCounter(0)
    }
    return (
        <div>
            <form className="buttons">
                <button onClick={plus} className="btn btn-blue">Увеличить</button>
                <button onClick={minus} className="btn btn-orange">Уменьшить</button>
                <button onClick={reset} className="btn">Сбросить</button>
            </form>
        </div>
    );
}


export default Buttons;