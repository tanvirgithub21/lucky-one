import React from 'react';
import "./SingleItem.css";
import { FaShoppingCart } from "react-icons/fa";

const SingleItem = ({item, addToCard}) => {
    const {name, img, price} = item;

    let newName = "";
    if(name.length >= 24){
        newName = (name.slice(0, 24 ))+"...";
    }
    else{
        newName = name;
    }

    return (
        <div className='singleCard'>
            <div className="imgBox">
                <img src={img} alt="img" />
            </div>
            <div className="infoBox">
                <h4>{newName}</h4>
                <p>Price: ${price} </p>
                <button onClick={()=>addToCard(item)}>Add To Card <FaShoppingCart className='soppingIcon' /></button>
            </div>
        </div>
    );
};

export default SingleItem;