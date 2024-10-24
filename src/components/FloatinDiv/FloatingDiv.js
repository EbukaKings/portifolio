import React from 'react'
import './floating.css'
import Crown from '../../img/crown.png'


function FloatingDiv({txt1, txt2} ) {
  return (
    <div className='floatingdiv'>
        <img src={Crown} alt='' />
        <span>
            {txt1}
            <br/>
            {txt2}
        </span>
        <img></img>
    </div>
  )
}
export default FloatingDiv;