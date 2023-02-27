import React from 'react'
import './Intro.css';
import github from '../../assets/github.png';
import linkdeen from '../../assets/linkedin.png';
import insta from '../../assets/instagram.png';
import vector1 from '../../assets/Vector1.png';
import vector2 from '../../assets/Vector2.png';
import boy from '../../assets/boy.png';
import tumb1 from '../../assets/thumbup.png';
import crown from '../../assets/crown.png';
import glas from '../../assets/glassesimoji.png';
import Floating from '../Floating/Floating';
import { motion } from "framer-motion"


const Intro = () => {
  const transition={duration : 2,type:'spring'}
  return (
    <div className="intrto">
        <div className="L-intro">
            <span>Hy! I Am</span>
            <span>Krishna Murari</span>
            <span>Frontend Developer wit hight level of Experence in web design and Development Producting
             the Quality work</span>
             <button className='btn'>Hire Me</button>

             <div className="sosial-icons">
            <img src={github} alt="" className='sosial-i'/>
            <img src={linkdeen} alt="" className='sosial-i' />
            <img src={insta} alt="" className='sosial-i' />
        </div>
        </div>
      
        
        <div className="R-intro">
            <img src={vector1} alt="" className='sosi'/>
            <img src={vector2} alt="" className='sosi' />
            <img src={boy} alt="" className='sosi' />
            <motion.img
            initial={{left: '-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={glas} alt="" className='sosi' />
           
            <motion.div
            initial={{left:'15%'}}
            whileInView={{left:'8%'}}
            transition={transition}
             style={{top:'23rem',left:'4rem'}} className="floatingdiv1">
            <Floating image={tumb1} text1={'Best'} text2={'Design Award'} />
            </motion.div>

            <motion.div
            inherit={{left:'90%'}}
            whileInView={{left:'70%'}}
            transition={transition}
             style={{top:'2rem',right:'-1.5rem'}} className="floatingdiv">
              
            <Floating image={crown} text1={'Web'} text2={'Developer'} />
            </motion.div>
            

            
        </div>
    </div>
  )
}

export default Intro