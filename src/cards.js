import rider from './images/01_Rider_b.jpg';
import clover from './images/02_Clover.jpg';
import ship from './images/03_Ship.jpg';
import house from './images/04_House.jpg';
import tree from './images/05_Tree.jpg';
import clouds from './images/06_Clouds.jpg';
import snake from './images/07_Snake.jpg';
import coffin from './images/08_Coffin.jpg';
import bouquet from './images/09_Bouquet.jpg';
import scythe from './images/10_Scythe.jpg';
import whip from './images/11_Whip.jpg';
import birds from './images/12_Birds.jpg';
import child from './images/13_Child.jpg';
import fox from './images/14_Fox.jpg';
import bear from './images/15_Bear.jpg';
import stars from './images/16_Stars.jpg';
import stork from './images/17_Stork.jpg';
import dog from './images/18_Dog.jpg';
import tower from './images/19_Tower.jpg';
import garden from './images/20_Garden.jpg';
import mountain from './images/21_Mountain.jpg';
import crossroads from './images/22_Crossroads.jpg';
import mice from './images/23_Rats.jpg';
import heart from './images/24_Hearts.jpg';
import ring from './images/25_Ring.jpg';
import book from './images/26_Book.jpg';
import letter from './images/27_Letter.jpg';
import animus from './images/28_Man.jpg';
import anima from './images/29_Woman.jpg';
import lily from './images/30_Lily.jpg';
import sun from './images/31_Sun.jpg';
import moon from './images/32_Moon.jpg';
import key from './images/33_Key.jpg';
import fish from './images/34_Fish.jpg';
import anchor from './images/35_Anchor.jpg';
import cross from './images/36_Cross.jpg';

const cards = [
  {
    name: "Rider",
    number: "1",
    leftMeanings: ["energetic", "passionate", "fast"],
    rightMeanings: ["passion", "activity", "messages"],
    image: rider
  },
  {
    name: "Clover",
    number: "2",
    leftMeanings: ["lucky", "lighthearted", "happy"],
    rightMeanings: ["happiness", "opportunity", "luck"],
    image: clover
  },
  {
    name: "Ship",
    number: "3",
    leftMeanings: ["distant", "adventurous", "faraway"],
    rightMeanings: ["travel", "departure", "adventure"],
    image: ship
  },
  {
    name: "House",
    number: "4",
    leftMeanings: ["safe", "traditional", "established"],
    rightMeanings: ["home", "establishment", "safety"],
    image: house
  },
  {
    name: "Tree",
    number: "5",
    leftMeanings: ["growing", "grounded", "spiritual"],
    rightMeanings: ["growth", "spirituality", "health"],
    image: tree
  },
  {
    name: "Clouds",
    number: "6",
    leftMeanings: ["confused", "uncertain", "misunderstood"],
    rightMeanings: ["confusion", "uncertainty", "misunderstanding"],
    image: clouds
  },
  {
    name: "Snake",
    number: "7",
    leftMeanings: ["seductive", "deceptive", "sexual"],
    rightMeanings: ["desire", "deception", "sexuality"],
    image: snake
  },
  {
    name: "Coffin",
    number: "8",
    leftMeanings: ["ending", "grieving", "mournful"],
    rightMeanings: ["loss", "grief", "mourning"],
    image: coffin
  },
  {
    name: "Bouquet",
    number: "9",
    leftMeanings: ["pleasant", "cordial", "polite"],
    rightMeanings: ["etiquette", "flattery", "appreciation"],
    image: bouquet
  },
  {
    name: "Scythe",
    number: "10",
    leftMeanings: ["accidental", "hasty", "dangerous"],
    rightMeanings: ["warning", "accident", "danger"],
    image: scythe
  },
  {
    name: "Whip",
    number: "11",
    leftMeanings: ["conflicting", "argumentative", "opposing"],
    rightMeanings: ["conflict", "discussions", "arguments"],
    image: whip
  },
  {
    name: "Birds",
    number: "12",
    leftMeanings: ["worried", "excited", "anxious"],
    rightMeanings: ["worry", "excitement", "gossip"],
    image: birds
  },
  {
    name: "Child",
    number: "13",
    leftMeanings: ["new", "playful", "innocent"],
    rightMeanings: ["inexperience", "immaturity", "innocence"],
    image: child
  },
  {
    name: "Fox",
    number: "14",
    leftMeanings: ["selfish", "tricky", "cunning"],
    rightMeanings: ["selfishness", "trick", "caution"],
    image: fox
  },
  {
    name: "Bear",
    number: "15",
    leftMeanings: ["powerful", "dominant", "influential"],
    rightMeanings: ["power", "influence", "leadership"],
    image: bear
  },
  {
    name: "Stars",
    number: "16",
    leftMeanings: ["hopeful", "inspiring", "optimistic"],
    rightMeanings: ["hope", "inspiration", "dreams"],
    image: stars
  },
  {
    name: "Stork",
    number: "17",
    leftMeanings: ["changing", "transitioning", "recurring"],
    rightMeanings: ["change", "transition", "cycle"],
    image: stork
  },
  {
    name: "Dog",
    number: "18",
    leftMeanings: ["loyal", "friendly", "obedient"],
    rightMeanings: ["loyalty", "friendship", "obedience"],
    image: dog
  },
  {
    name: "Tower",
    number: "19",
    leftMeanings: ["authoritative", "lonely", "arrogant"],
    rightMeanings: ["authority", "loneliness", "arrogance"],
    image: tower
  },
  {
    name: "Garden",
    number: "20",
    leftMeanings: ["public", "social", "cultural"],
    rightMeanings: ["society", "culture", "network"],
    image: garden
  },
  {
    name: "Mountain",
    number: "21",
    leftMeanings: ["difficult", "problematic", "challenging"],
    rightMeanings: ["difficulty", "obstacle", "challenge"],
    image: mountain
  },
  {
    name: "Crossroads",
    number: "22",
    leftMeanings: ["hesitating", "decisive", "opportunistic"],
    rightMeanings: ["choices", "opportunities", "decisions"],
    image: crossroads
  },
  {
    name: "Mice",
    number: "23",
    leftMeanings: ["dwindling", "defective", "diseased"],
    rightMeanings: ["deficiency", "destruction", "disease"],
    image: mice
  },
  {
    name: "Heart",
    number: "24",
    leftMeanings: ["loving", "romantic", "soft"],
    rightMeanings: ["love", "romance", "charity"],
    image: heart
  },
  {
    name: "Ring",
    number: "25",
    leftMeanings: ["committed", "honorable", "promised"],
    rightMeanings: ["commitment", "honor", "promise"],
    image: ring
  },
  {
    name: "Book",
    number: "26",
    leftMeanings: ["secretive", "educated", "informed"],
    rightMeanings: ["secrets", "knowledge", "research"],
    image: book
  },
  {
    name: "Letter",
    number: "27",
    leftMeanings: ["conversational", "expressive", "communicative"],
    rightMeanings: ["conversation", "communication", "documents"],
    image: letter
  },
  {
    name: "Animus",
    number: "28",
    leftMeanings: ["masculine"],
    rightMeanings: ["male", "masculinity"],
    image: animus
  },
  {
    name: "Anima",
    number: "29",
    leftMeanings: ["feminine"],
    rightMeanings: ["female", "femininity"],
    image: anima
  },
  {
    name: "Lily",
    number: "30",
    leftMeanings: ["sensual", "ethical", "wise"],
    rightMeanings: ["sensuality", "ethics", "wisdom"],
    image: lily
  },
  {
    name: "Sun",
    number: "31",
    leftMeanings: ["happy", "successful", "warm"],
    rightMeanings: ["happiness", "victory", "truth"],
    image: sun
  },
  {
    name: "Moon",
    number: "32",
    leftMeanings: ["subconscious", "intuitive", "emotional"],
    rightMeanings: ["subconscious", "fear", "fantasy"],
    image: moon
  },
  {
    name: "Key",
    number: "33",
    leftMeanings: ["open", "revealing", "liberating"],
    rightMeanings: ["achievement", "liberation", "revelation"],
    image: key
  },
  {
    name: "Fish",
    number: "34",
    leftMeanings: ["financial", "abundant", "valuable"],
    rightMeanings: ["finances", "business", "abundance"],
    image: fish
  },
  {
    name: "Anchor",
    number: "35",
    leftMeanings: ["stable", "restrained", "secure"],
    rightMeanings: ["stability", "restraint", "resilience"],
    image: anchor
  },
  {
    name: "Cross",
    number: "36",
    leftMeanings: ["burdening", "dutiful", "suffering"],
    rightMeanings: ["burden", "duty", "suffering"],
    image: cross
  },
];

export default cards;