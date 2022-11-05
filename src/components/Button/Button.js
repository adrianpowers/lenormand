import React from 'react';
import './Button.css';

const Button = ({shuffleHandler, resetHandler, bothPicked}) => {
    if(bothPicked === false){
        return(
            <button 
                id="shuffleButton" 
                onClick={shuffleHandler}
            >
                <h2>Shuffle Deck</h2>
            </button>
        )
    } else {
        return(
            <button 
                id="shuffleButton" 
                onClick={resetHandler}
            >
                <h2>Reset: New Reading</h2>
            </button>
        )
    }
}

export default Button;