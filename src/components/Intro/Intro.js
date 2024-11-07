import React from 'react'
import './intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png'
import Facebook from '../../img/Facebook.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'

import Kings from '../../img/kings.png.jpeg'
import thumbsup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimo from '../../img/glasses.png'
import FloatingDiv from '../FloatinDiv/FloatingDiv';
import { motion } from 'framer-motion';


function Intro() {
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span>Hello, i Am</span>
                <span>Kings</span>
                <span>Frontend Developer with high level of experience in web desiging and development, pruducting the Quality work</span>
            </div>
            <a href='#c-right'><button className='button i-button'>Hire me</button></a>           
            <div className='i-icons'>
                <img src={Github} alt='' />
                
                <img src={Linkedin} alt='' />
                <img src={Facebook} alt='' />
            </div>

        </div>
        <div className='i-right'>
            <img src={Vector1} alt=''></img>
            <img src={Vector2} alt=''></img>
            <img src={Kings} alt=''></img>
            <div style={{top: "-4%", left: "68%"}}>
                <FloatingDiv img={Crown} txt1 ="Web" txt2='Developer'/>
            </div>
            <div className='blur1' style={{background: "rgb(238 210 255)"}}>
                
            </div>
            <div className='blur2'>
            </div>
        </div>
    </div>
  )
}
export default Intro
