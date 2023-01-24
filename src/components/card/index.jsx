import './styles.css'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
    </div>
  )
}

export default Card