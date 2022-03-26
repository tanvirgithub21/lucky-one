import React from 'react';
import "./Button.css"

const Button = () => {
    return (
        <div className="btn">
            <button className='cardBtn' >Choose Again</button>
            <button className='cardBtn' >Choose For One</button>
        </div>
    );
};

export default Button;