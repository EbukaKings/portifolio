import React from 'react';
import './footer.css';
import wave from '../../img/wave.png';
// import { SiInsta360, SiFacebook, SiGit } from 'react-icons/si';



function Footer() {
  return (
    <div className='footer'>
        <img src={wave} alt='' style={{width: "100%"}}/>
        <div className='f-content'>
        <span className=''>READY TO WORK WITH US?</span>
        <span>Feel free to connect with
                    <br />
                    me...
                    send a
                    message
                </span>
        </div>
        <div className='f-icons'>
          <div>

          </div>
                
                
                
                <a href='https://github.com/EbukaKings' className='no-underline'><div className='facebook'>Github</div></a>
                <a href='https://wa.link/ods4r8' className='no-underline'><div className='facebook'>Whatsapp</div></a>
                <a href='https://x.com/Ebuce_Kings?t=P18Dlyen4YahBROl8xokyg&s=09' className='no-underline'><div className='facebook'>Twitter</div></a>
                <a href='https://www.facebook.com/ebuka.kingsely.1' className='no-underline'><div className='facebook'>Facebook</div></a>
                
                
            

        </div>
        <div className='f-producer'>
        <span>MADE BY</span>
        <div className='producer-name'>KINGS</div>
        </div>
    </div>
  )
}
export default Footer;