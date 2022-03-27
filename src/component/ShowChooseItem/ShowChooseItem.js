import React from 'react';
import "./ShowChooseItem.css"

const ShowChooseItem = ({showData}) => {
    console.log(showData);
    
const {name, img, price, id} = showData;
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
            <button>Ok</button>
            </div>
        </div>
    );
};

export default ShowChooseItem;