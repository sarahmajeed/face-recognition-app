import React from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo/Logo';
import './App.scss';
import { Component } from 'react';

const app = new Clarifai.App({
  apiKey: '0f21e1e7e1864a4f8fa879769798a2d4',
});

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }
  onInputChange = event => {
    this.setState({
      input: event.target.value,
    });
  };
  onButtonSubmit = () => {
    this.setState({
      imageURL: this.state.input,
    });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        console.log(response);
      },
      function(err) {
        // there was an error
      }
    );
  };
  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
