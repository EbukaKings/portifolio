import React from 'react';
import "./card.css"

function Card({emoji, heading, details}) {
  return (
    <div className='card'>
        <img src={emoji} />
        <span>{heading}</span>
        <span>{details}</span>
        <button className='c-button'>See project...</button>
    </div>
  )
}
export default Card;