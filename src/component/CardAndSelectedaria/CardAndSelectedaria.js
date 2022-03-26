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
    },[])

    return (
        <div>
            {/* all card item  */}
            <div className="allItem">
            {
                items.map(item => <SingleItem item={item} key={item.id} />)
            }
            </div>
            {/* Selected aria  */}
            <div className="selectedItemList">
                <SelectedItem />
            </div>
        </div>
    );
};

export default CardAndSelectedaria;