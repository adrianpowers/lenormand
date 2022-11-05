import React from 'react';
import './Deck.css'
import backOfCard from '../../images/back01.jpg'
import backOfCardDark from '../../images/back03.jpg'

const Deck = ({filteredDeck}) => {
    const laidCards = filteredDeck.map( (card, index) => {

        const randomNum = Math.floor(Math.random() * (10 - -10) -10 )

        if(index % 2 === 0) {
            return <div className='cardContainer' style={{transform: `rotate(${randomNum}deg)` }}><img src={backOfCard} alt="back of light card" key={card.number} id={card.number} className='deckImage' /></div>
        } else {
            return <div className='cardContainer' style={{transform: `rotate(${randomNum}deg)` }}><img src={backOfCardDark} alt="back of dark card" key={card.number} id={card.number} className='deckImage' /></div>
        }
    })
    return (

        <div className='deckContainer'>
            {laidCards}
        </div>
        
    )
}

export default Deck;