import React from 'react'
import './Navbar.css'
import Toggle from './toggle/Toggle'

function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>Kings</div>
            <Toggle />
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experiences</li>
                    <li>Portfolio</li>
                    <li>Testmonials</li>
                </ul>
            </div>
            <button className='button n-button'>
                Contact
            </button>
        </div>
    </div>
  )
}
export default Navbar