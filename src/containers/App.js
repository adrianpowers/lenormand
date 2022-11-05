import {Component} from 'react';
import './App.css';

import cards from '../cards'
import Deck from '../components/Deck/Deck';
import Hand from '../components/Hand/Hand';
// import Shuffle from '../components/Shuffle/Shuffle';

class App extends Component {
  constructor(){
    super()
    this.state = {
      shuffledDeck: [],
      card1: {},
      card2: {},
      isFlipped: false,
      isStarting: true
    }
  }

  onCardClick = (event) => {
    const cardId = event.target.id;
    const pickedCard = cards.filter(card => card.number === cardId)
    this.setState({card1: pickedCard[0], isStarting: false})
    console.log("ON CARD CLICK =================================================================")
    console.log(pickedCard);
    console.log(this.state.shuffledDeck);
  }

  shuffle = (deck) => {
    let currDeck = [...deck];
    let currentIndex = currDeck.length,  randomIndex;

    while (currentIndex != 0) {

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
    console.log("ON CLICK =================================================================")
    console.log(this.state.shuffledDeck)
  }
  
  componentDidMount(){
    const shuffledCards = this.shuffle(cards);
    this.setState({
      shuffledDeck: [...shuffledCards]
    })
    console.log("ON MOUNT =================================================================")
    console.log(this.state.shuffledDeck);
  }

  render(){
    console.log("ON RENDER =================================================================")
    console.log(this.state.shuffledDeck);
    return(
      <div>
        <h1> Lenormand Reading </h1>

        <button 
          id="shuffleButton" 
          onClick={this.shuffleHandler}
        >
          <h2>Shuffle Deck</h2>
        </button>

        <Deck 
          filteredDeck={this.state.shuffledDeck} 
          onCardClick={this.onCardClick} 
        />

        <h2>Pick your {this.state.isStarting ? 'first' : 'second'} card</h2>
        <h2>You picked {this.state.card1.name} </h2>

        <Hand />

      </div>
    );
  }
}

export default App;
