import React from 'react';
import './ImageLinkForm.scss';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, name, entries }) => {
  return (
    <div>
      <div className='input-wrap'>
        <h3 className='info'>
          Face Detector. Give it a try!
        </h3>
        <div className='rank'> {`${name}, your current entry count is ${entries}`}</div>
        <input type='text' className='input' onChange={onInputChange} />
        <button onClick={onButtonSubmit} className='button'>
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
