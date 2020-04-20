import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('working');
  }
  render() {
    const { email, password } = this.state;
    return (
      <div className='main'>
        <Tilt
          className='Tilt'
          options={{ max: 15 }}
          style={{ height: 500, width: 500 }}>
          <form className='Tilt form' onSubmit={this.handleSubmit}>
            <p className='head'>Log In to you account here!</p>
            <span className='span'></span>

            <div className='input-grp'>
              <div className='label'>
                <label className='label' htmlFor='username'>
                  Email
                </label>
              </div>
              {/* Email icon */}
              <i class='fas fa-envelope fa-s icon'></i>
              <input
                onChange={this.handleChange}
                value={email}
                name='email'
                type='text'
                className='input'
                required
              />
            </div>

            <div className='input-grp'>
              {/* password icon */}
              <div className='label'>
                <label className='label' htmlFor='username'>
                  Password
                </label>
              </div>
              <i class='fas fa-key fa-s icon'></i>
              <input
                onChange={this.handleChange}
                value={password}
                name='password'
                type='password'
                //placeholder='Password'
                className='input'
                required
              />
            </div>

            <button className='btn'>Log In</button>
            <span className='span'></span>
            <p className='login'>
              Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
          </form>
        </Tilt>
      </div>
    );
  }
}

export default Signin;
