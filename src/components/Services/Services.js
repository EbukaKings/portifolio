import React from 'react';
import "./Services.css"
import Card from '../Card/Card';
import HeadEmoji from '../../img/glasses.png'
import Humble from '../../img/humble.png'


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
    <button className="button s-button">Download CV</button>
</a>
        <div className='blur s-blur' style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className='cards'>
        {/* first card */}
        <div style={{top: "12rem", left: "-4rem"}}>
          <Card 
          emoji = {HeadEmoji}
          heading = {'Design'}
          details = {"Figma, Sketch, Photoshop, Adobe, False 9"}
          />
        </div>
        {/* second card */}
        <div style={{left: "14rem"}}>
          <Card 
          emoji = {HeadEmoji}
          heading = {'Design'}
          details = {"Html, Css-5, Javascript, React, React Nativ"}
          />
        </div>
        {/* third card */}
        <div style={{top: "19rem",left: "12rem"}}>
          <Card 
          emoji = {Humble}
          heading = {'UI/UX'}
          details = {"Html, Css-5, Javascript, React, React Nativ"}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
