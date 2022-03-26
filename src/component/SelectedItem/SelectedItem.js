import React from 'react';
import './SelectedItem.css';

let newCardData = [];  

// const chooseAgainFn = () => newCardData = [];

const SelectedItem = ({cardData}) => {  
    newCardData = [...cardData];  
    return (
        <div className='cardBOx'>
            <h3>Selected Items</h3>
            <div className='careItemName'>
                {
                    newCardData.map(singleCardData => (
                        <h5 key={singleCardData.id}>{singleCardData.name}</h5>
                    ))
                }

                <div className="btn">
                    <button className='cardBtn' >Choose Again</button>
                    <button className='cardBtn' >Choose For One</button>
                </div>
            </div>
        </div>
    );
};

export default SelectedItem;