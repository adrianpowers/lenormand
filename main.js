const axios = require("axios")
const BASE_URL = "http://localhost:5000"

let leftCard = null;
let rightCard = null;

// Returns promise that resolves to array of all card objects, for reference.
async function getAllCards (){
    const cards = await axios.get(`${BASE_URL}/cards`);
    return cards.data;
}

// Returns promise that resolves to an object containing a random card.
async function randomCard() {
    const cards = await axios.get(`${BASE_URL}/cards`);
    const num = Math.random() * cards.data.length;
    const index = Math.floor(num)
    return cards.data[index]
}

// Returns promise that resolves to array of two randomly selected cards.
// This function also ensures that no two cards that are pulled are the same.
async function pullCards() {

    leftCard = await randomCard();
    rightCard = await randomCard();
    
    while(leftCard.name === rightCard.name) {
        rightCard = await randomCard();
    }

    return [leftCard, rightCard]

}

// Constructs reading message from the meanings of the two cards.
// Returns a promise that resolves to a string of the reading message.
async function readingMessage() {
    await pullCards()
    let message = 
        `Your cards are The ${leftCard.name} and The ${rightCard.name}.\nPotential Interpretations:\n`
    
    for(let leftMeaning of leftCard.leftMeanings) {
        for(let rightMeaning of rightCard.rightMeanings){
            message += `${leftMeaning} ${rightMeaning}\n`
        }
    }

    return message;
}

// Invoking and logging the function to create a reading.
readingMessage().then(console.log)