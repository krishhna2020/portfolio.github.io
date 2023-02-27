
import './App.css';

import React from 'react'
import Navbar from './Component/Navbar/Navbar';
import Intro from './Component/Intro/Intro';
import Service from './Component/Service/Service';
import Experence from './Component/Experence/Experence';
import Work from './Component/Work/Work';
import Portfolio from './Component/Portfolio/Portfolio';
import Testimonial from './Component/Testimonial/Testimonial';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';






const App = () => {
  return (
    <div className='App'>
     <Navbar />
     <Intro />
     <Service />
     <Experence />
     <Work />
     <Portfolio />
     <Testimonial />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
