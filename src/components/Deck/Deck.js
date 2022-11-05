import React from 'react';
import './Deck.css'
import backOfCard from '../../images/back01.jpg'
import backOfCardDark from '../../images/back03.jpg'

const Deck = ({filteredDeck, onCardClick}) => {
    const laidCards = filteredDeck.map( (card, index) => {
        
        const randomNum = Math.floor(Math.random() * (10 - -10) -10 ) //QUESTION: How do I get this to stop moving the cards unless the state changes?

        if(index % 2 === 0) {
            return (
                <div 
                    className='cardContainer' 
                    style={{transform: `rotate(${randomNum}deg)` }} 
                    key={card.number}
                >
                    <img 
                        src={backOfCard} 
                        alt="back of light card" 
                        id={card.number} 
                        className='deckImage light' 
                        onClick={onCardClick} 
                    />
                </div>)
        } else {
            return (
                <div 
                    className='cardContainer' 
                    style={{transform: `rotate(${randomNum}deg)` }} 
                    key={card.number}
                >
                    <img 
                        src={backOfCardDark} 
                        alt="back of dark card" 
                        id={card.number} 
                        className='deckImage dark' 
                        onClick={onCardClick} 
                    />
                </div>
            )
        }
    })
    return (

        <div className='deckContainer'>
            {laidCards}
        </div>
        
    )
}

export default Deck;