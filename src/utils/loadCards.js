import axios from 'axios';

const loadCards = async (page) => {
  const result = await axios.get(`https://api.magicthegathering.io/v1/cards?page=${page}`)
  var cards = result.data.cards

  for(let i=0; i<cards.length; i++) {
    for(let j=0; j<cards.length; j++) {
      if(cards[i].name == cards[j].name && i != j) {
        cards.splice(j, 1)
      }
    }
  }

  return cards
}

export default loadCards