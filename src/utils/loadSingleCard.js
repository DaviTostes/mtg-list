import axios from 'axios';

const loadSingleCard = async (name) => {
  const result = await axios.get(`https://api.magicthegathering.io/v1/cards?name=${name}`)
  return {imageUrl: result.data.cards[0].imageUrl, 
          colors: result.data.cards[0].colors,
          artist: result.data.cards[0].artist,
          formats: result.data.cards[0].legalities.map(format => format.format),
          setName: result.data.cards[0].setName
         }
}

export default loadSingleCard

