import React from 'react';
import Button from '../Button/Button';
import './SelectedItem.css';

 
const SelectedItem = ({cardData, chooseAginFunc}) => {  
    let newCardData = [...cardData];

    return (
        <div className="position">
            <div className='cardBOx'>
            <h3>Selected Items</h3>

            <div className='careItemName'>
                {
                    newCardData.map(singleCardData => (
                        <p key={singleCardData.id}>{singleCardData.name}</p>
                    ))
                }
                <Button chooseAginFunc={chooseAginFunc}/>
            </div>
        </div>
        </div>
    );
};



export default SelectedItem;