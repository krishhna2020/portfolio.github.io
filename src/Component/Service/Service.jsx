import React from 'react'
import './Service.css'
import hartimoji from '../../assets/heartemoji.png';
import hartimoji1 from '../../assets/glasses.png'
import hartimoji2 from '../../assets/humble.png';
import { motion } from "framer-motion"

import Card from '../../Card/Card'
const Service = () => {
  const transition={duration:2,type:'spring'}
  return (
    <div className="Service Services">
        <div className="Service-L">
            <span>My Awesome</span>
            <span>Service</span>
            <sapn className="css-not">Lorem ipsum dolor sit amet this is lorem lepsem  consectetur adipisicing elit. Inventore,
                 ut! Alias maiores inventore eligendi incidunt?
            </sapn>

                 <button className='btn cv-btn'>Download Cv</button>
        </div>
       
        <div className="Service-R">
          <motion.div
           initial={{left:'70%'}}
           whileInView={{left:'60%'}}
           transition={transition}
          className="card-section" style={{left:'17rem'}}>
            <Card 
            image={hartimoji1} text1={'Design'} text2={'Figma,Sketch, Photoshop,Adobe Allustrater, Adobe Xd'}
            />
          </motion.div>

          <motion.div
        
          className="card-section1" style={{left:'-5rem', top:'12rem'}}>
            <Card 
            image={hartimoji1} text1={'Developer'} text2={'Html,Css, JavaScreept,React, Angular'}
            />
          </motion.div>

          <div className="card-section2" style={{left:'13rem', top:'19rem'}}>
            <Card 
            image={hartimoji2} text1={'Ux/Ui'} text2={'lorem imsume i know many more in this section'}
            />
          </div>
        </div>
    </div>
  )
}

export default Service