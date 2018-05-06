import React from 'react';

function onClick(imageId){
  return function() {
    global.$(`#${imageId}`).modal('open');
  }
}

export default function Image({ image, width, height }) {
  return (
    <div>
      <img
        onClick={onClick(image.id)}
        style={{ width, height }}
        src={image.imageUrl}
        name={image.name}
      />
      <p>{image.name}</p>
    </div>
  );
}
