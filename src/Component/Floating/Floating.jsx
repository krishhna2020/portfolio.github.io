import React from 'react'

import './Floating.css';
const Floating = ({image,text1,text2}) => {
  return (
    <div className="mythumb">
     <img src={image} alt="" />
     <span>
        {text1}<br />{text2}
     </span>
    </div>
  )
}

export default Floating