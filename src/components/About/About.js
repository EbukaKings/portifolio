import React from 'react'
import App from '../../App';
import Navbar from '../Navbar/Navbar';
import AboutSit from '../../img/about image.png';
import Footer from '../Footer/Footer';
import './About.css';
function About() {
  return (
    <div className='about-container'>
      <Navbar />
      <div>
        <div><img src={AboutSit}/></div>
        <div>
        Welcome to my portfolio
        </div>
        <div>I'm Ugwu Chukwuebuka K, a passionate and dedicated Frontend Developer. I believe that the power of technology lies in its ability to create meaningful and intuitive user experiences. With a combination of creativity and technical expertise, I strive to build visually stunning and user-friendly websites that leave a lasting impression.

My journey in the world of web development started FEW yearS ago when I discovered my fascination with transforming ideas into interactive digital experiences. Since then, I have honed my skills in HTML, CSS, JavaScript, and various frontend frameworks to bring designs to life. I am constantly exploring new technologies and staying up-to-date with the latest industry trends to deliver cutting-edge solutions.

Beyond the technical realm, I am a problem solver and a lifelong learner. I thrive on challenges and embrace every opportunity to expand my knowledge and skill set. I am dedicated to continuous growth, always seeking out new ways to improve my craft and stay ahead in this ever-evolving field.

Thank you for visiting my portfolio. I hope you enjoy exploring my work and seeing the passion and attention to detail that goes into each project. If you have any questions or would like to discuss potential collaborations, please don't hesitate to reach out. I look forward to connecting with you!
</div>
<div>Stacks</div>
<div><span></span><span>HTML</span></div>
<div><span></span><span>CSS</span></div>
<div><span></span><span>JAVASCRIPT</span></div>
<div><span></span><span>REACT</span></div>
<div>Regards</div>
<div>Ugwu Chukwuebuka (KINGS)</div>

<Footer />
      </div>
         
    </div>
  )}
  export default About;