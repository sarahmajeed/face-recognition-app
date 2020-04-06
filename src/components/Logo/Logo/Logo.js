import React from 'react';
import Tilt from 'react-tilt';
import './Logo.scss';
import facial from './facial.png';

const Logo = () => {
  return (
    <div className='logo'>
      <Tilt
        className='Tilt'
        options={{ max: 55 }}
        style={{ height: 100, width: 100 }}>
        <div className='Tilt-inner'>
          <img className='brain' src={facial} alt='brain' />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
