import React from 'react';
import './ImageLinkForm.scss';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='info'>
        This Magic Brain will detect faces in your pictures. Give it a try!
      </p>
      <div className='input-wrap'>
        <input type='text' className='input' onChange={onInputChange} />
        <button onClick={onButtonSubmit} className='button'>
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
