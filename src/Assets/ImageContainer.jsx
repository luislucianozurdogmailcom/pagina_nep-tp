import React from 'react';

const ImageContainer = ({ src, alt, className, w }) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={src} alt={alt} className={`w-${w} h-auto`}/>
    </div>
  );
};

export default ImageContainer;
