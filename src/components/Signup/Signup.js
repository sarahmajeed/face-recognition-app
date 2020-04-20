import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';
import Tilt from 'react-tilt';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    const { username, email, password } = this.state;
    return (
      <div class='main'>
        <Tilt
          className='Tilt'
          options={{ max: 15 }}
          style={{ height: 500, width: 500 }}>
          <form class='form'>
            <p class='head'>Sign Up here!</p>
            <span className='span'></span>

            {/* input */}
            <div className='input-grp'>
              <div className='label'>
                <label className='label' htmlFor='username'>
                  Name
                </label>
              </div>
              {/* user-icon */}
              <i className='fas fa-user fa-s icon'></i>
              <input
                name='username'
                type='text'
                value={username}
                onChange={this.handleChange}
                className='input'
                required
              />
              {/* label */}
            </div>

            <div className='input-grp'>
              <div className='label'>
                <label className='label' htmlFor='email'>
                  Email
                </label>
              </div>
              {/* Email icon */}
              <i class='fas fa-envelope fa-s icon'></i>
              <input
                name='email'
                type='email'
                value={email}
                onChange={this.handleChange}
                className='input'
                required
              />
            </div>

            <div className='input-grp'>
              <div className='label'>
                <label className='label' htmlFor='password'>
                  Password
                </label>
              </div>
              {/* password icon */}
              <i class='fas fa-key fa-s icon'></i>
              <input
                name='password'
                type='password'
                value={password}
                onChange={this.handleChange}
                className='input'
                required
              />
            </div>

            <button className='btn'>Sign Up</button>
            <p className='terms'>
              By signing up, you agree to our Terms of Use and Privacy Policy.
            </p>
            <span className='span'></span>
            <p className='login'>
              Already have an account? <Link to='/signin'>Log In</Link>
            </p>
          </form>
        </Tilt>
      </div>
    );
  }
}

export default Signup;
