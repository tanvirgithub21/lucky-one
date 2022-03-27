import React from 'react';
import "./ShowChooseItem.css"

const ShowChooseItem = ({randomItem, okBtnFunction}) => {

    const {name, img, price} = randomItem;

    return (
        
        
        <div className='showItem'>
            
            <div className="imgBox">
                <img src={img} alt="img" />
            </div>
            <div className="infoBox">
                <h4>{name}</h4>
                <p>Price: ${price}</p>
            </div>

            <div className="btnBox">
            <button onClick={okBtnFunction}>Ok</button>
            </div>
        </div>
    );
};

export default ShowChooseItem;