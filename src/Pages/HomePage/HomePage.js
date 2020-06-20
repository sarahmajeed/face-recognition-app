import React from 'react';
import './HomePage.scss';

const HomePage = ({ handleHomepageSignin, handleHomepageRegister }) => {
  return (
    <div className='home'>
      <div className="link">
        <a target="_blank" href="https://github.com/Sarahmdawood"><i class="fa fa-github fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/sarahmajeed/"><i class="fab fa-linkedin fa-2x"></i></a>
        <a href="https://www.facebook.com/sarah.majeed.507/"><i class="fab fa-facebook fa-2x"></i></a>
      </div>
      <h1>
        <i>Want to get your face detected?</i>
      </h1>
      <button className='btn' onClick={handleHomepageRegister}>
        Register
      </button>
      <button className='btn' onClick={handleHomepageSignin}>
        Signin
      </button>
      <div className="source-code">

        <a target="_blank" href="https://github.com/Sarahmdawood/face-recognition-app"><i class='fa fa-github fa-2x'></i><p>View Source Code</p></a>
      </div>
    </div>
  );
};

export default HomePage;
