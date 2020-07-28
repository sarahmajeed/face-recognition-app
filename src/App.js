import React from 'react';
import { Route } from 'react-router-dom';
import Clarifai from 'clarifai';
import FaceDetection from './Pages/FaceDetection/FaceDetection';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

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
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
    this.handleHomepageSignin = this.handleHomepageSignin.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  handleHomepageSignin(history) {
    return history.push('/signin');
  }
  handleHomepageRegister(history) {
    return history.push('/signup');
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
      .then((response) => {
        fetch('http://localhost:5000/image', {
          method: 'put',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
          .then(res => res.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count }), console.log('inside count'))
          })
        this.displayFaceBox(this.calculateFaceLocation(response))
      }
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className='App'>

        <Route
          exact
          path='/'
          render={(routeProps) => (
            <HomePage
              handleHomepageSignin={() =>
                this.handleHomepageSignin(routeProps.history)
              }
              handleHomepageRegister={() =>
                this.handleHomepageRegister(routeProps.history)
              }
            />
          )}
        />

        <Route
          exact
          path='/signin'
          render={(routeProps) => (
            <Signin
              loadUser={this.loadUser}
              routeProps={routeProps}
            />
          )}
        />
        <Route
          exact
          path='/signup'
          render={(routeProps) => (
            <Signup
              loadUser={this.loadUser}
              routeProps={routeProps}
            />
          )}
        />
        <Route
          exact
          path='/facedetect'
          render={(routeProps) => (
            <FaceDetection
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
              box={this.state.box}
              imageURL={this.state.imageURL}
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
          )}
        />


      </div>
    );
  }
}

export default App;
