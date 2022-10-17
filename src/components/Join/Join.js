import React from 'react'
import './Join.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5jt7ukz', 'template_1bomvor', form.current, 'lTtL3dw3K6j3_LIVg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='Join' id='join-us'>
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>Ready to</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span className='stroke-text'>your body</span>
          <span>with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} action="" className='email-container' onSubmit={sendEmail}>
          <input type="email" name='user_email' placeholder='Enter your Email ...' />
          <button className='btn btn-j'>Join now</button>
        </form>
      </div>
    </div>
  )
}

export default Join