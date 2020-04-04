import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FaceDetection from "./pages/FaceDetection";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/facedetection" render={() => <FaceDetection />} />
      </Switch>
    </div>
  );
}

export default App;
