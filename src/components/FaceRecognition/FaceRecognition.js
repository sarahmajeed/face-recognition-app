import React from 'react';
import './FaceRecognition.scss';

const FaceRecognition = ({ imageURL, box }) => {
  return (
    <div className='center ma'>
      <div className='main absolute mt2'>
        <div className="wrap">
          <img
            id='inputimage'
            src={imageURL}
            alt=''
            width='400px'
            height='400px'
          />
        </div>
        <div
          className='bounding-box'
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
