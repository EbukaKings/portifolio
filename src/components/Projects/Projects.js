import React from 'react';
import "./Projects.css";
import ecomerce from '../../img/ecomerce-javascript.png';
import game from '../../img/javascript game.png';
import reactecomerce from '../../img/react-ecomerce.png';
import youtube from '../../img/youtube-clone.png';

function Projects() {
  return (
    <div>
      <div className='projects'>
      <div className='project-grid'>
        <div>Projects<p></p></div>
        <p>01</p>
        <div className='project-1-container'></div>
      </div>
      <div className='project-01'>
        <div className='project-01-image-container'>
          <img className='e-comerce-image' src={ecomerce} alt="E-commerce Project" />
        </div>
      </div>
      <div className='project01-discription-grid'>
        <div className='product01-name'>Product - Ecommerce</div>
        <div className='project-description'>
          <div className='project-description-grid'>
          
            An interactive multipage website, where we can add a product to our cart, craete an order and even track our order.
          </div>
            
            <div className='technologies'>
            <div className='button javascript'>
                Javascript
            </div>
            <div className='button css'>
                CSS
            </div>
            <div className='button html'>
                HTML
            </div>
            </div>
           
        </div>
        <div className='project01-source'>
            <div className='source-button'><a className='no-underline' href='https://github.com/EbukaKings/amazon-clone-project'>Github</a></div>
            <div className='source-button'><a className='no-underline' href='https://amazon-clone-project-seven.vercel.app/'>Website</a></div>
        </div>
      </div>
    </div>
    <div className='projects-02'>
      <div className='project-grid'>
        <div><p>Project</p></div>
        <p>02</p>
        <div className='project-1-container'></div>
      </div>
      <div className='project-01'>
        <div className='project-01-image-container'>
          <img className='e-comerce-image' src={youtube} alt="Youtube Project" />
        </div>
      </div>
      <div className='project01-discription-grid'>
        <div className='product01-name'>Youtube Project</div>
        <div className='project-description'>
          <div className='project-description-grid'>
          
          This project is a simplified clone of YouTube, designed using only HTML and CSS. It showcases the layout and basic styling of the platform, providing a static experience that mimics the look and feel of the original site.
          </div>
            
            <div className='technologies'>
            
            <div className='button css'>
                CSS
            </div>
            <div className='button html'>
                HTML
            </div>
            </div>
           
        </div>
        <div className='project01-source'>
            <div className='source-button'><a className='no-underline' href='https://github.com/EbukaKings/javascript-game.git'>Github</a></div>
            <div className='source-button'><a className='no-underline' href='https://javascript-game-sigma.vercel.app/'>Website</a></div>
        </div>
      </div>
    </div>

    <div className='projects-02'>
      <div className='project-grid'>
        <div><p>Project</p></div>
        <p>02</p>
        <div className='project-1-container'></div>
      </div>
      <div className='project-01'>
        <div className='project-01-image-container'>
          <img className='e-comerce-image' src={game} alt="E-commerce Project" />
        </div>
      </div>
      <div className='project01-discription-grid'>
        <div className='product01-name'>JavaScript-built Rock Paper Scissors game</div>
        <div className='project-description'>
          <div className='project-description-grid'>
          
          JavaScript-built Rock Paper Scissors game where players compete against the computer, selecting rock, paper, or scissors through interactive buttons, with win/loss tracking and random computer choices determined by algorithms.
          </div>
            
            <div className='technologies'>
            <div className='button javascript'>
                Javascript
            </div>
            <div className='button css'>
                CSS
            </div>
            <div className='button html'>
                HTML
            </div>
            </div>
           
        </div>
        <div className='project01-source'>
            <div className='source-button'><a className='no-underline' href='https://github.com/EbukaKings/Youtube-clone.git'>Github</a></div>
            <div className='source-button'><a className='no-underline' href='https://youtube-clone-gray-xi.vercel.app/'>Website</a></div>
        </div>
      </div>
    </div>


    <div className='projects-03'>
      <div className='project-grid'>
        <div><p>Project</p></div>
        <p>03</p>
        <div className='project-1-container'></div>
      </div>
      <div className='project-01'>
        <div className='project-01-image-container'>
          <img className='e-comerce-image' src={reactecomerce} alt="E-commerce Project" />
        </div>
      </div>
      <div className='project01-discription-grid'>
        <div className='product01-name'>Product - Ecommerce</div>
        <div className='project-description'>
          <div className='project-description-grid'>
          
            User-friendly e-commerce website that allows customers
            
            to browse, search, and purchase products online. The website wil
           
            l provide a seamless shopping experience, offering a wide
            
            range of products, brands, styles, and sizes.
           
            It will also incorporate secure payment gateways.
          </div>
            
            <div className='technologies'>
            <div className='button javascript'>
                Javascript
            </div>
            <div className='button css'>
                REACT
            </div>
            <div className='button html'>
                CSS
            </div>
            </div>
           
        </div>
        <div className='project01-source'>
            <div className='source-button'><a className='no-underline' href='https://github.com/EbukaKings/react-cart-project.git'>Github</a></div>
            <div className='source-button'><a className='no-underline' href='https://react-cart-project-xi.vercel.app/'>Website</a></div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Projects;
