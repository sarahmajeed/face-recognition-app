import React from 'react';
import { Link } from 'react-router-dom';
import './signin.scss';

const handleSubmit = () => {
  console.log('working');
};

const Signin = () => {
  return (
    <div>
      <form className='form'>
        <div className='inputs'>
          <input type='email' required />
          <input type='password' required />
        </div>
        <button className='btn' onClick={handleSubmit}>
          Sign In
        </button>
      </form>
      <span></span>
      <p>
        Dont have an account? <Link to='/signup'>Register here</Link>
      </p>
    </div>
  );
};

export default Signin;
