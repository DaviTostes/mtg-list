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
    this.setState({cardsInPage: await loadCards(page)})
  }

  handleNextPage = async () => {
    const {page} = this.state
    const buttonNext = document.querySelector(".nextPage")
    const buttonPrevious = document.querySelector(".previousPage")

    buttonNext.setAttribute('disabled', '')
    buttonPrevious.setAttribute('disabled', '')

    this.setState({page: page + 1, cardsInPage: await loadCards(page+1)})

    setTimeout(() => {
      buttonNext.removeAttribute('disabled', '')
      buttonPrevious.removeAttribute('disabled', '')
    }, 2000);
  }

  handlePreviousPage = async () => {
    const {page} = this.state
    const buttonNext = document.querySelector(".nextPage")
    const buttonPrevious = document.querySelector(".previousPage")

    buttonNext.setAttribute('disabled', '')
    buttonPrevious.setAttribute('disabled', '')

    this.setState({page: page - 1, cardsInPage: await loadCards(page-1)})

    setTimeout(() => {
      buttonNext.removeAttribute('disabled', '')
      buttonPrevious.removeAttribute('disabled', '')
    }, 2000);
  }

  render() {
    const {cardsInPage, page} = this.state

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
          <div className="button-wrapper">
          <button onClick={this.handlePreviousPage} className="previousPage">{'<- Previous Page'}</button>
          <button onClick={this.handleNextPage} className="nextPage">Next Page -></button>
          <p>Page: {page}</p>
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
          </div>
        </main>
      </div>
    )
  }
}

export default Home
