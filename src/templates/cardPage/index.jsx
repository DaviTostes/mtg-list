import { useEffect } from 'react'
import "./styles.css"

const CardPage = () => {

  useEffect(() => {
    const url = document.URL
    console.log(url)
  })

  return (
    <div className="cardPage">
      <h1>Oi</h1>
    </div>
  )
}

export default CardPage