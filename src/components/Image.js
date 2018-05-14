import React from 'react';

function onClick(imageId){
  return function() {
    global.$(`#${imageId}`).modal('open');
  }
}

export default function Image({ image }) {
  return (
    <div>
      <img
        className={image.className}
        onClick={onClick(image.id)}
        src={image.imageUrl}
        name={image.name}
      />
    </div>
  );
}
