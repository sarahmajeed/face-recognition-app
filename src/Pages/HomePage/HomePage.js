import React from 'react';
import './HomePage.scss';

const HomePage = ({ handleHomepageSignin, handleHomepageRegister }) => {
  return (
    <div className='home'>
      <h1>Want to get your face detected?</h1>
      <button className='btn' onClick={handleHomepageRegister}>
        Register
      </button>
      <button className='btn' onClick={handleHomepageSignin}>
        Signin
      </button>
    </div>
  );
};

export default HomePage;
