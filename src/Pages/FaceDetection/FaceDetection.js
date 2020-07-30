import React from 'react';
import { Route } from 'react-router-dom';
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';
import './FaceDetection.scss';
import NavBar from '../../components/NavBar/NavBar'


function FaceDetection({ onInputChange, onButtonSubmit, box, imageURL, name, entries }) {
  console.log('face detection rendering')
  return (
    <div className="body-wrap">
      <NavBar />
      <div className='body'>
        <div className="inputbox">
          <Route
            exact
            path='/facedetect'
            render={() => (
              <ImageLinkForm
                onInputChange={onInputChange}
                onButtonSubmit={onButtonSubmit}
                name={name}
                entries={entries}
              />
            )}
          />
        </div>
        <div className="box">
          <Route
            exact
            path='/facedetect'
            render={() => <FaceRecognition box={box} imageURL={imageURL} />}
          />
        </div>
      </div>
    </div>
  );
}

export default FaceDetection;
