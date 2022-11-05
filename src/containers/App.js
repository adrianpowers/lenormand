import {Component} from 'react';
import './App.css';

import cards from '../cards'
import Deck from '../components/Deck/Deck';
import Hand from '../components/Hand/Hand';
import Button from '../components/Button/Button';

class App extends Component {
  constructor(){
    super()
    this.state = {
      shuffledDeck: [],
      card1: {},
      card2: {},
      bothPicked: false,
      isStarting: true,
      isFlipped: false,
      back1: '',
      back2: ''
    }
  }

  onCardClick = (event) => {
    let cardOneLength = Object.keys(this.state.card1).length === 0
    let cardTwoLength = Object.keys(this.state.card2).length === 0
    const cardId = event.target.id;
    const pickedCard = cards.filter(card => card.number === cardId)
      
      if(cardOneLength){
        this.setState({card1: pickedCard[0], isStarting: false})
        event.target.classList.add("picked");
      }
      if(!cardOneLength && cardTwoLength){
        this.setState({card2: pickedCard[0], bothPicked: true})
        event.target.classList.add("picked");
        event.target.parentElement.parentElement.classList.add("disabled");
    }
  }

  resetHandler = () => {
    const resetShuffledCards = this.shuffle(cards);
    this.setState({
      shuffledDeck: [...resetShuffledCards],
      card1: {},
      card2: {},
      bothPicked: false,
      isStarting: true,
      isFlipped: false,
      back1: '',
      back2: ''
    })
    document.querySelector('.cardContainer').parentElement.classList.remove("disabled");
    let cardList = document.querySelectorAll('.deckImage');
    cardList.forEach(card =>{
        const currCardClass = card.classList
        if(currCardClass.contains('picked')){
          currCardClass.remove('picked')
        }
      }
    )
  }

  shuffle = (deck) => {
    let currDeck = [...deck];
    let currentIndex = currDeck.length,  randomIndex;

    while (currentIndex !== 0) {

      // Pick a remaining card.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current card.
      [
        currDeck[currentIndex], 
        currDeck[randomIndex]
      ] = [
        currDeck[randomIndex], 
        currDeck[currentIndex]
      ];
    }
    return currDeck;
  }

  shuffleHandler = () => {
    const newShuffle = this.shuffle(this.state.shuffledDeck)
    this.setState({shuffledDeck: newShuffle});
  }
  
  componentDidMount(){
    const shuffledCards = this.shuffle(cards);
    this.setState({
      shuffledDeck: [...shuffledCards]
    })
  }

  render(){
    return(
      <div>
        <h1> Lenormand Reading </h1>
        <Button shuffleHandler={this.shuffleHandler} bothPicked={this.state.bothPicked} resetHandler={this.resetHandler} />

        <Deck 
          filteredDeck={this.state.shuffledDeck} 
          onCardClick={this.onCardClick} 
        />

        {
          (this.state.isStarting) 
            ? <h2>Choose your first card</h2>
            : (this.state.bothPicked)
              ? <h2>Your card reading:</h2>
              : <h2>Choose your second card</h2>
        }

        <Hand cardOne={this.state.card1} cardTwo={this.state.card2} />

      </div>
    );
  }
}

// TODO: Clean this shit up

export default App;
