import './styles.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className="card">
      <Link className='link' to={`/${props.name}`}>
        <img src={props.img} alt={props.name} />
      </Link>
    </div>
  )
}

export default Card