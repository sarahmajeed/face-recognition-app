import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/API";
import NavBar from "../NavBar/NavBar";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSignin = this.handleSignin.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const handleSignin = (event) => {
      event.preventDefault();
      fetch("http://localhost:5000/signin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((res) => res.json())
        .then((user) => {
          console.log(user);
          if (user.id) {
            this.props.loadUser(user);
            this.props.routeProps.history.push("/facedetect");
          }
        });
    };
    const { email, password } = this.state;
    return (
      <div className="packet">
        <NavBar />

        <form className="form">
          <p className="head">Log In to you account here!</p>
          <span className="span"></span>

          <div className="input-grp">
            <div className="label">
              <label className="label" htmlFor="username">
                Email
              </label>
            </div>
            {/* Email icon */}
            <i className="fas fa-envelope fa-s icon"></i>
            <input
              onChange={this.handleChange}
              value={email}
              name="email"
              type="text"
              className="input"
              required
            />
          </div>

          <div className="input-grp">
            {/* password icon */}
            <div className="label">
              <label className="label" htmlFor="username">
                Password
              </label>
            </div>
            <i className="fas fa-key fa-s icon"></i>
            <input
              onChange={this.handleChange}
              value={password}
              name="password"
              type="password"
              //placeholder='Password'
              className="input"
              required
            />
          </div>

          <button onClick={handleSignin} className="btn">
            Log In
          </button>

          <p className="login">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Signin;
