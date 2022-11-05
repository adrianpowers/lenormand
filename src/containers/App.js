import {Component} from 'react';
import './App.css';

import cards from '../cards'
import Deck from '../components/Deck/Deck';
import Hand from '../components/Hand/Hand';

class App extends Component {
  constructor(){
    super()
    this.state = {
      deck: {},
      card1: {},
      card2: {},
      isFlipped: false,
      leftCardMeaning: '',
      rightCardMeaning: ''
    }
  }
  render(){
    // const filteredDeck = [];

    return (
      <div>
        {/* <p>{cards[0].name}</p> */}
        <h1> Lenormand Reading </h1>
        {/* <p>In the Lenormand system, two card spreads are drawn. The left card is the adjective, while the right card is the noun. The order can drastically change the reading interpretation.</p>
        <h2>INSTRUCTIONS: Pick your first card / Pick your second card.</h2> */}
        
        <Deck filteredDeck={cards} />
        <h2>Pick your (first/second) card</h2>
        <Hand />

        {/* <p>SHOW ALL CARDS HERE. When they pick their cards, put them away in a stack to the side and replace with two cards.</p>
        <p>FLIP TWO CARDS. Show images of the cards from that website or store the images?</p> */}
      </div>
    );
  }
}

export default App;
