import React, { useEffect, useState } from 'react';
import ErrorMass from '../ErrorMass/ErrorMass';
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

    //show error message or not 
    const [errorReport, setErrorReport] = React.useState(false);


    // choose Agine on click function 
    const chooseAgineHendel = () => setCardData([]);

    //Error button Continue function
    const errorEvent = messageStatus =>{
        setErrorReport(messageStatus);
    }

    // onclick function added four item or not 
    function addToCard(data){
        
        if(cardData.length < 4){

            let newCardData = [...cardData, data];
            setCardData(newCardData) 

        }else{
            setErrorReport(true)
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
            {
                errorReport && <ErrorMass massage={"A maximum of four items can be added"} setErrorReport={setErrorReport}/>
            }
        </div>
    );
};

export default CardAndSelectedaria;