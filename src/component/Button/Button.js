import React from 'react';
import "./Button.css"

const Button = ({chooseAginFunc, cardItemData}) => {

    // Choose for one
    const chooseOne = () => {
        const randomNumber = Math.floor(Math.random() * cardItemData.length) + 1;
        cardItemData.map( item => {
            if(item.id === randomNumber){
                
                console.log(randomNumber, item.id);
                    //==================== random number paichi >>
            }
        })  
    }
    
    return (
        <div className="btn">
            <button className='cardBtn' onClick={chooseAginFunc}>Choose Again</button>
            <button className='cardBtn' onClick={()=>chooseOne()}>Choose For One</button>
        </div>
    );
};

export default Button;