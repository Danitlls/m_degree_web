import React from 'react';
import { Row } from 'react-materialize';
import './imageGrid.css';

export default function ImageGrid({ images, children }) {
  return (
    <div className="m-degree-container">
      <Row className="desserts-container">
        {children}
      </Row>
    </div>
  );
}
