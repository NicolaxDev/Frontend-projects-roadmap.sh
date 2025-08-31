import React from 'react'
import "../styles/card.css";

export default function CardProject({name, link}) {
  return (
    <div className='card'>
      <span>{name}</span>
      <a href={`${link}`}>{name}</a>
    </div>
  )
}
