import React from 'react'
import Navbar from '../Navbar/Navbar';
import sitimage from '../../img/need to talk image.png';
import Footer from '../Footer/Footer';
import './contact-info.css';

function Contactinfo() {
  return (
    <div className='contactinfo-div'>
      <Navbar />
      <div className='sit-img'><img src={sitimage} /></div>
      <div className='my-4'>Contact Information</div>
      <div></div>
      <div className=''>Thank you for visiting my portfolio! If you have any questions,
         project inquiries, or just want to say hello, please feel free to get in touch with me using the form below.
         I would love to hear from you!
      </div>
      <div className='my-contacts-info-div'>
      <div><p>ebucekings62@gmail.com</p></div>
      <div><p>+234-806-657-3193</p></div>
      <div><p>Remote</p></div>
      </div>
      
      <Footer />
    </div>
  )
}
export default Contactinfo;
