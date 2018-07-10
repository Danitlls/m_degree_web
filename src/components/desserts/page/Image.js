import React from 'react';

export default function Image({ image }) {
  return (
    <div>
      <img
        className={image.className}
        src={image.imageUrl}
        name={image.name}
      />
    </div>
  );
}
