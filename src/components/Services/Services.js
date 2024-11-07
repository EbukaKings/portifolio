import React from 'react';
import "./Services.css"
import Card from '../Card/Card';
import HeadEmoji from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Css from '../../img/css logo.png'
import Javascript from '../../img/javascript-logo.png'
import React1 from '../../img/react-logo.png'

function Services() {
  return (
    <div className='services'>
      {/* left side */}
      <div className='awesome'>
        <span>My Awesome</span>
        <span>Services</span>
        <span>I help brands create unique and thoughtful digital experiences within the
          <br />
          modern web. Currently living in Nigeria.
        </span>
        <a href="https://drive.google.com/uc?id=1qlkkYKy1jxiHsI4ZhLZPRySnh_ly9Igr&export=download">
    <button className="button s-button">Get My CV</button>
</a>
        <div className='blur s-blur' style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className='cards'>
        <divs>Skills</divs>
        {/* first card */}
        <div style={{top: "12rem", left: "-4rem"}} className='cards-divs'>
          <Card 
          emoji = {Css}
          heading = {'CSS & BOOTSTRAP'}
          details = {"Profcient with major CSS skills use to create website in a profecional level"}
          />
        </div>
        {/* second card */}
        <div style={{left: "14rem"}}>
          <Card 
          emoji = {Javascript}
          heading = {'JAVASCRIPT'}
          details = {"Highly skilled in JavaScript, with expertise in building complex website."}
          />
        </div>
        {/* third card */}
        <div style={{top: "19rem",left: "12rem"}}>
          <Card 
          emoji = {React1}
          heading = {'REACT'}
          details = {"Highly skilled in React"}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
