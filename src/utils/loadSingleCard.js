import axios from 'axios';

const loadSingleCard = async (name) => {
  const result = await axios.get(`https://api.magicthegathering.io/v1/cards?name=${name}`)
  return result.data.cards[0]
}

export default loadSingleCard

