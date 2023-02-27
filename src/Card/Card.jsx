import React from 'react'
import './Card.css'
const Card = ({image,text1,text2}) => {
  return (
    <div className="card">
      {/*it come from service section */}
        <img src={image} alt="" />
        <span>{text1}</span>
        <span>{text2}</span>
        <button className='mybtn'>Learn More</button>
    </div>
  )
}

export default Card