import React from 'react';
import frame from '../../images/frame1.png';
import './Hand.css';

const Hand = ({ cardOne, cardTwo }) => {
    let cardOneMeaning = '';
    let cardTwoMeaning = '';
    if(Object.keys(cardOne).length > 0){
        cardOneMeaning = cardOne.leftMeanings.join(', ');
    }
    if(Object.keys(cardTwo).length > 0){
        cardTwoMeaning = cardTwo.rightMeanings.join(', ');
    }

    return(
        <div className='handContainer'>
            <div className='cards' id="card1">
                <div className='reading-top card1'>
                    <img src={frame} alt='back of first card' className='frame' />
                    <img src={cardOne.image} alt="" className="noCard" /> 
                </div>
                <div className='reading-bottom'>
                    <h2>Adjective</h2>
                    <p>{cardOneMeaning}</p>
                </div>
            </div>
            <div className='cards' id="card2">
                <div className='reading-top card2'>
                    <img src={frame} alt='back of first card' className='frame' />
                    <img src={cardTwo.image} alt="" className="noCard" />
                </div>
                <div className='reading-bottom'>
                    <h2>Noun</h2>
                    <p>{cardTwoMeaning}</p>
                </div>
            </div>
        </div>
    )
}

export default Hand;