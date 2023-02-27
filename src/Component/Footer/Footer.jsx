import React from 'react'
import './Footer.css';
import wave from '../../assets/wave.png';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import FaceBook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} alte="footer-img" style={{width:'100%'}}/>
        <div className="f-content">
            <span>krishnamap@gmail.com</span>
            <div className="footer-icons">
              <Instagram color='white' size='3rem' /> 
              <FaceBook color='white' size='3rem' /> 
              <Github color='white' size='3rem' /> 
            </div>
        </div>
    </div>
  )
}

export default Footer