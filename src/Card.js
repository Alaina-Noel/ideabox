import React from 'react';
import './Card.css';

const Card = ({title,description, id}) => {
  // const [cards, setCards] = useState();
  return (
    <div className= 'card'>
    <h3>{title}</h3>
    <p>{description}</p>
    <button>🗑</button>
    </div>
  )
}

export default Card;