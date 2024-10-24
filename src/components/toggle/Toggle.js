import React from 'react';
import './toggle.css';
import { UilSun, UilMoon } from '@iconscout/react-unicons';
import { ThemeContext } from '../../Context';
import { useContext } from 'react';
import { type } from '@testing-library/user-event/dist/type';

function Toggle() {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }
  return (
    <div className='toggle' onClick={handleClick}>
      <UilMoon />
      <UilSun/>
      <div className='t-button'
      style = {darkMode? {left: '2px'} : {right: "2px"}}>
        
      </div>
    </div>
  );
}

export default Toggle;
