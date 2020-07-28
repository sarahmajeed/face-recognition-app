import React from 'react';
import './HomePage.scss';
import Navigation from '../../components/Navigation/Navigation.js';
import Logo from '../../components/Logo/Logo/Logo';
import facedetect from '../../images/facedetect.jpg';

const HomePage = ({ handleHomepageSignin, handleHomepageRegister }) => {

  // const hoverMe = () => {
  //   document.getElementById('hidden').className = 'afterhover';

  //   console.log('inside');
  // }

  return (
    <div className='home'>
      {/* <div className="overlay"></div> */}
      <Navigation />
      {/* <Logo /> */}
      <div className="main">

        <div className="thirdh1">

          <h1>
            Face detection hub
        </h1>
        </div>
        <button className='btn first' onClick={handleHomepageRegister}>
          Register
      </button>
        <button className='btn' onClick={handleHomepageSignin}>
          Signin
      </button>
      </div>
      {/* Tilt */}

      <div className="source-code">
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/Sarahmdawood/face-recognition-app">
          <i className='fa fa-github fa-2x'></i>
          <p>View Source Code</p>
        </a>
      </div>


    </div >
  );
};

export default HomePage;
