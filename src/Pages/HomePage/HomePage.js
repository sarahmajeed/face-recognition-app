import React from 'react';
import './HomePage.scss';
import Navigation from '../../components/Navigation/Navigation.js';
import Logo from '../../components/Logo/Logo/Logo';
import facedetect from '../../images/facedetect.jpg';

const HomePage = ({ handleHomepageSignin, handleHomepageRegister }) => {

  return (
    <div className='home'>
      {/* <div className="overlay"></div> */}
      <Navigation />
      {/* <Logo /> */}
      <div className="link">
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/Sarahmdawood"><i class="fa fa-github fa"></i></a>
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/sarahmajeed/"><i class="fab fa-linkedin fa"></i></a>

        <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/sarah.majeed.507/"><i class="fab fa-facebook fa"></i></a>
      </div>
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

      {/* <div className="source-code">
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/Sarahmdawood/face-recognition-app">
          <i className='fa fa-github fa-2x'></i>
          <p>View Source Code</p>
        </a>
      </div> */}


    </div>
  );
};

export default HomePage;
