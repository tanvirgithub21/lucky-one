import React from 'react';
import "./Button.css"

const Button = ({chooseAginFunc}) => {
    return (
        <div className="btn">
            <button className='cardBtn' onClick={chooseAginFunc}>Choose Again</button>
            <button className='cardBtn' >Choose For One</button>
        </div>
    );
};

export default Button;