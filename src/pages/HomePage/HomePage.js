import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="container">
      <div className="buttons-wrapper">
        <button className="button signin">Sign In</button>
        <button className="button reg">Register</button>
      </div>
    </div>
  );
};

export default HomePage;
