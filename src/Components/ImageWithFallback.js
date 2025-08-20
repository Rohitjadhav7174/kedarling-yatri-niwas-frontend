// Create src/Components/ImageWithFallback.js
import React, { useState } from 'react';

const ImageWithFallback = ({ src, fallbackSrc, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!error) {
      setError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback;