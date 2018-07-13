import React from 'react';
import { Row } from 'react-bootstrap';
import './pressGrid.css';

export default function PressImageGrid({ images, children }) {
  return (
    <Row>
      {children}
    </Row>
  );
}
