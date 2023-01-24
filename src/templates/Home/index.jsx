import { Component } from 'react'
import Card from '../../components/card'
import loadCards from '../../utils/loadCards'
import './styles.css'

class Home extends Component {
  state = {
    page: 1,
    cardsInPage: []
  }

  async componentDidMount() {
    const {page, cardsInPage} = this.state
    this.setState({page: page + 1, cardsInPage: await loadCards(page)})
  }

  handleNextPage = async () => {
    const {page} = this.state
    this.setState({page: page + 1, cardsInPage: await loadCards(page)})
  }

  render() {
    const {cardsInPage} = this.state

    return (
      <div className="home">
        <header>
          <h1>Magic: The Gathering Cards List</h1>
          <p>Made by <a href="http://github.com/davitostes" target="_blank" rel="noopener noreferrer">Davi Tostes</a></p>
        </header>
        <main>
          <div className="input-wrapper">
            <input type="text" placeholder='Search' />
          </div>
          <div className="cards-wrapper">
            {
              cardsInPage.map((card, index) =>
                <Card
                  key={index}
                  name={card.name}
                  img={card.imageUrl}
                />
              )
            }
            <button onClick={this.handleNextPage}>Next Page -></button>
          </div>
        </main>
      </div>
    )
  }
}

export default Home
