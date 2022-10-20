# Lenormand Readings
## A short fortune-telling JavaScript project created by Adrian Powers.


- Utilizes JSON Server and Axios.

- Utilizes async/await to pull random cards from a local database and populate possible interpretations from card meanings.


#### **In the Lenormand system, two card spreads are drawn. The left card is the adjective, while the right card is the noun. The order can drastically change the reading interpretation. For example...**


- If you pull the Rider (speed, passion) on the left and the Ring (commitment) on the right, it can show that one is hastily moving into commitment in their life.

- However, when the *Ring* is on the left and the *Rider* is on the right, it can show that one is committed to their passions.

#### The readingMessage() function is asynchronous and must be called with a .then(console.log) to log the results. Called in this manner, the function will list your two cards, as well as a list of interpretations assembled from the card's meanings, depending on the side they're on.