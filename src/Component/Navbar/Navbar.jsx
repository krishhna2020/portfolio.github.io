import React from 'react'
import './Navbar.css';
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <div className="navbar-wrraper">
        <div className="nav-l">
         <div className="nav-name">Krishna</div>
         
        </div>
        <div className="nav-r">
         <div className="n-list">
            <ul>
              <Link spy={true} to ='Navbar' smooth={true} activeClass='activeClass' >
              <li>Home </li>
              </Link>

              <Link spy={true} to ='Services' smooth={true} activeClass='activeClass' >
              <li>Services</li>
              </Link>

              <Link spy={true} to ='my-experience' smooth={true} activeClass='activeClass' >
              <li>Experence</li>
              </Link>
               

               
              <Link spy={true} to ='my-portfoli' smooth={true} activeClass='activeClass' >
              <li>Portfilio</li>
              </Link>

              
              <Link spy={true} to ='my-terstmonial' smooth={true} activeClass='activeClass' >
              <li>Testmonial</li>
              </Link> 
              
                
                
            </ul>
         </div>
         <button className='btn n-buuon'>
            Contact
         </button>
        </div>
    </div>
  )
}  

export default Navbar