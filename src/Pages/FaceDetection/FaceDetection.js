import React from 'react';
import { Route } from 'react-router-dom';
import Particles from 'react-particles-js';

import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';
import './FaceDetection.scss';

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

function FaceDetection({ onInputChange, onButtonSubmit, box, imageURL }) {
  return (
    <div className='body'>
      <Particles className='particles' params={particlesOptions} />
      {/* <Route exact path='/facedetect' render={() => <Rank />} /> */}
      <Route
        exact
        path='/facedetect'
        render={() => (
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
        )}
      />
      <Route
        exact
        path='/facedetect'
        render={() => <FaceRecognition box={box} imageURL={imageURL} />}
      />
    </div>
  );
}

export default FaceDetection;
