import React from 'react';
import { Row } from 'react-bootstrap';
import './pressGrid.css';

export default function PressImageGrid({ images, children }) {
  return (
    <div className="m-degree-c" >
      <Row style={{ margin: '.5rem auto' }}>
        {children}
      </Row>
    </div>
  );
}
