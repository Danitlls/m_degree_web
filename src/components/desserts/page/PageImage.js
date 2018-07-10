import React from 'react';
import Image from './Image';
import { Col } from 'react-bootstrap';
import './imageGrid.css';

export default function PageImage({ image, onClick }) {
  return (
    <Col
      key={image.id}
      xs={image.smCol || 12}
      sm={image.mCol || 6}
      md={image.lCol || 4}
      className='dessert-image'
    >
      <span onClick={onClick(image)}>
        <p>See more</p>
      </span>
      <Image image={image} />
    </Col>
  );
}
