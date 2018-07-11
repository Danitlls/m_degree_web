import React from 'react';
import { Col } from 'react-bootstrap';
import './pressGrid.css';

export default function PressPageImage({ image, onClick }) {
  return (
    <Col
      key={image.id}
      xs={image.smCol || 12}
      sm={image.mCol || 6}
      md={image.lCol || 4}
      className='press-card'
    >
      <div className='card-img'>
        <img src={image.coverPhoto} onClick={onClick(image)} />
      </div>
      <div className="brand-image">
        <img src={image.brandImage} />
      </div>
      <h6>{image.type}</h6>
      <div className="text-press">
        <p>{image.country}</p>
        <p>{image.date}</p>
      </div>
      <span onClick={onClick(image)}>See More</span>
    </Col>
  );
}
