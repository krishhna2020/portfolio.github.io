import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact-form">
        <div className="c-left">
           <span>Get In Touch</span>
           <span>Contact Me</span>
        </div>
        <div className="c-right">
            <form>
                <input type="text" name="username" className='user' placeholder='Name' />
                <input type="email" name="user-email" className='user' placeholder='Email' />
                <textarea name='message' className='user msg-user' placeholder='Message' />
                 <button className='btn'>Sent</button>
            </form>
        </div>
    </div>
  )
}

export default Contact