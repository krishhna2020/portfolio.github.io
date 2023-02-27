import React from 'react'
import './Work.css'
import fb from '../../assets/Facebook.png';
import up from '../../assets/Upwork.png';
import sf from '../../assets/Shopify.png';
import am from '../../assets/amazon.png';
import fi from '../../assets/fiverr.png';
import {motion} from 'framer-motion';
const Work = () => {
  return (
    <div className="Work">
        <div className="work-L">
        <span>Work for All these</span>
        <span>Brand & Client</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quo cumque,
             fugit sit quasi tempora maiores placeat consequatur dolorem laboriosam 
             consectetur id provident, ab assumenda!</span>
        <button className='btn work-btn'>Hire Me</button>
        </div>

        <motion.div
        initial={{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5,type:'spring'}}
        className="Work-R">
            <div className="maincircle">
                <div className="mi-circle1">
                    <img src={fb} alt="" className='fbda'/>
                </div>
                <div className="mi-circle2">
                <img src={up} alt="" className='fbda'/>
                </div>
                <div className="mi-circle3">
                <img src={sf} alt="" className='fbda2'/>
                </div>
                <div className="mi-circle4">
                <img src={am} alt="" className='fbda'/>
                </div>
                <div className="mi-circle5">
                <img src={fi} alt="" className='fbda4'/>
                </div>
                <div className="myblue"></div>
                <div className="myorange"></div>
            </div>
        </motion.div>
    </div>
  )
}

export default Work