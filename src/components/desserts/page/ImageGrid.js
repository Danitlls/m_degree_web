import React from 'react';
import { Row } from 'react-bootstrap';
import './imageGrid.css';

export default function ImageGrid({ images, children }) {
  return (
    <div className="m-degree-container">
      <div className="desserts-container">
        {children}
      </div>
    </div>
  );
}
