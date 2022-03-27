import React from 'react';
import "./ErrorMass.css"

const ErrorMass = ({massage, setErrorReport}) => {

    return (
        <div className='errorBox'>
            <div className="content">
                <h2>+</h2>
                <h3>Ooops,</h3>
                <p>{massage}</p>
                <button onClick={()=>setErrorReport(false)}>CONTINUE</button>
            </div>
        </div>
    );
};

export default ErrorMass;