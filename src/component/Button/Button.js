import React, { useState } from 'react';
import "./Button.css";
import ShowChooseItem from "../ShowChooseItem/ShowChooseItem";


const Button = ({chooseAginFunc, cardItemData}) => {

    const [randomData, setRandomData] = React.useState(false);


    const [randomItem, setRandomItem] = useState({});
    // Choose for one
    const chooseOne = () => {
        console.log(cardItemData, "tanvir");
        
       if(cardItemData == []){
        return
       }else{
        const randomNumber = Math.floor(Math.random() * cardItemData.length);
        setRandomData(true);
        const randomItemData = cardItemData[randomNumber];
        setRandomItem(randomItemData) 
       }
    }

    const okBtnFunction = () => setRandomData(false);


    
    return (
        <div className="btn">
            <button className='cardBtn' onClick={chooseAginFunc}>Choose Again</button>
            <button className='cardBtn' onClick={()=>chooseOne()}>Choose For One</button>

            <div className="btnBOx">
                {randomData && <ShowChooseItem randomItem={randomItem} okBtnFunction={okBtnFunction}/>}
            </div>

        </div>
    );
};

export default Button;