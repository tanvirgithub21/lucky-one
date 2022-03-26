import React from 'react';
import Button from '../Button/Button';
import './SelectedItem.css';

 
const SelectedItem = ({cardData}) => {  
    let newCardData = [...cardData];

    return (
        <div className='cardBOx'>
            <h3>Selected Items</h3>

            <div className='careItemName'>
                {
                    newCardData.map(singleCardData => (
                        <h5 key={singleCardData.id}>{singleCardData.name}</h5>
                    ))
                }
                <Button />
            </div>
        </div>
    );
};



export default SelectedItem;