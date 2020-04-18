import React from 'react';
import { Link } from 'react-router-dom';

const handleSubmit = () => {
  console.log('working');
};

function Signup() {
  return (
    <div>
      <form className='form'>
        <div className='inputs'>
          <input type='text' required />
          <input type='email' required />
          <input type='password' required />
        </div>
        <button className='btn' onClick={handleSubmit}>
          Sign In
        </button>
      </form>
      <span></span>
      <p>
        Already have an account? <Link to='/signin'>Log in here</Link>
      </p>
    </div>
  );
}

export default Signup;
