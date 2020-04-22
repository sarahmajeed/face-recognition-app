import React from 'react';
import { Route } from 'react-router-dom';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import FaceDetection from './Pages/FaceDetection/FaceDetection';
import Register from './Pages/Register/Register';
import Logo from './components/Logo/Logo/Logo';
import HomePage from './Pages/HomePage/HomePage';
import './App.scss';
import { Component } from 'react';

const app = new Clarifai.App({
  apiKey: '0f21e1e7e1864a4f8fa879769798a2d4',
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }
  handleSignin(history) {
    console.log(history);
    return history.push('/facedetect');
  }
  calculateFaceLocation = (res) => {
    const clarifaiFace =
      res.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById('inputimage');

    const width = Number(image.width);
    const height = Number(image.height);
    console.log(clarifaiFace);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({
      box,
    });
  };

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  onButtonSubmit = () => {
    this.setState({
      imageURL: this.state.input,
    });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Logo />
        <Route exact path='/' render={() => <HomePage />} />
        <Route
          exact
          path='/signup'
          render={(routeProps) => (
            <Register
              handleSignin={() => this.handleSignin(routeProps.history)}
            />
          )}
        />

        <FaceDetection
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
          box={this.state.box}
          imageURL={this.state.imageURL}
        />
      </div>
    );
  }
}

export default App;
