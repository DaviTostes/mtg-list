import { Component, useEffect, useState } from 'react'
import "./styles.css"

import loadSingleCard from '../../utils/loadSingleCard'

class CardPage extends Component {
  state = {
    card: {}
  }

  async componentDidMount() {
    const {card} = this.state

    const url = document.URL
    var name = []

    for(let i=url.length; i>=0; i--) {
      if(url[i] === '/') {
        break
      }
      if(url[i] != undefined) {
        name.push(url[i])
      }
    }
    name = name.reverse()  
    name = name.join()

    for(let i=0; i<name.length; i++) {
      if(name[i] === ",") {
        name = name.replace(',', '')
      }
    }

    this.setState({card: await loadSingleCard(name)})
  }

  componentDidUpdate() {
    const {card} = this.state
  }

  render() {
    const {card} = this.state

    return (
      <div className="cardPage">
        <img src={card.imageUrl} alt="" />
        <div className="info-wrapper">
          <p>{card.text}</p>
          <p><b>Colors:</b> {card.colors}</p>
          <p><b>Artist:</b> {card.artist}</p>
          <p><b>Available Formats:</b> {card.formats}</p>
          <p><b>Set Name:</b> {card.setName}</p>
        </div>
      </div>
    )
  }
}

export default CardPage