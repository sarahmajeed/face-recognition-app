import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./Signup.scss";
import NavBar from "../NavBar/NavBar";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    //  this.handleSignup = this.handleSignup.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const handleSignup = (event) => {
      event.preventDefault();
      fetch("http://localhost:5000/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.username,
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((res) => res.json())
        .then((user) => {
          if (user) {
            this.props.routeProps.history.push("/facedetect");
            this.props.loadUser(user);
            console.log(user);
          }
        })
        .catch((err) => console.log(err.message));
    };
    const { username, email, password } = this.state;
    return (
      <div className="packet">
        <NavBar />
        <form className="form">
          <p className="head">Sign Up here!</p>
          <span className="span"></span>

          {/* input */}
          <div className="input-grp">
            <div className="label">
              <label className="label" htmlFor="username">
                Name
              </label>
            </div>
            {/* user-icon */}
            <i className="fas fa-user fa-s icon"></i>
            <input
              name="username"
              type="text"
              value={username}
              onChange={this.handleChange}
              className="input"
              required
            />
            {/* label */}
          </div>

          <div className="input-grp">
            <div className="label">
              <label className="label" htmlFor="email">
                Email
              </label>
            </div>
            {/* Email icon */}
            <i className="fas fa-envelope fa-s icon"></i>
            <input
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
              className="input"
              required
            />
          </div>

          <div className="input-grp">
            <div className="label">
              <label className="label" htmlFor="password">
                Password
              </label>
            </div>
            {/* password icon */}
            <i className="fas fa-key fa-s icon"></i>
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
              className="input"
              required
            />
          </div>

          <button onClick={handleSignup} className="btn">
            Sign Up
          </button>

          <p className="login">
            Already have an account? <Link to="/signin">Log In</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
