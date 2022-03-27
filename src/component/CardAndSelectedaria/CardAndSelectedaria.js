import React, { useEffect, useState } from 'react';
import SelectedItem from '../SelectedItem/SelectedItem';
import SingleItem from '../SingleItem/SingleItem';
import "./CardAndSelectedaria.css"

const CardAndSelectedaria = () => {

    const [items, setItems] = React.useState([]);

    // lode data to server
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/tanvirgithub21/ass-8-data/gh-pages/data.json")
        .then(response => response.json())
        .then(data => setItems(data)
        )
    },[]);

    // set card data this state 
    const [cardData, setCardData] = React.useState([]);

    // choose Agine on click function 
    const chooseAgineHendel = () => setCardData([]);

    // onclick function 
    function addToCard(data){
        
        if(cardData.length < 4){
            let newCardData = [...cardData, data]
            setCardData(newCardData)
        }else{
            console.log("Error mss dite hobe");  //==================== Add Error Mass Loading... >>
            
        }
    }
    return (
        <div className='cardAndDelected'>
            {/* all card item  */}
            <div className="allItem">
            {
                items.map(item => (

                    <SingleItem item={item} addToCard={addToCard} key={item.id} />
                ))
            }
            </div>
            {/* Selected aria  */}
            <div className="selectedItemList">
                <SelectedItem cardData={cardData} chooseAginFunc={chooseAgineHendel}/>
            </div>
        </div>
    );
};

export default CardAndSelectedaria;