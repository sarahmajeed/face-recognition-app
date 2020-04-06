import React from 'react';

const FaceRecognition = ({ imageURL }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img src={imageURL} alt='' width='250px' height='auto' />
      </div>
    </div>
  );
};

export default FaceRecognition;
