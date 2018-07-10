import React from 'react';
import Image from './Image';
import { Modal, Row, Col } from 'react-materialize';
import DessertCarousel from './DessertCarousel';
import './imageGrid.css';

function onClick(imageId){
  return function() {
    global.$(`#${imageId}`).modal('open');
  }
}

export default function ImageGrid({ images }) {
  return (
    <div className="m-degree-container">
      <Row className="desserts-container">
        {images.map(image => {
          return (
            <Col
              key={image.id}
              s={image.smCol || 12}
              m={image.mCol || 6}
              l={image.lCol || 4}
              className='dessert-image'
            >
              <Image image={image} />

              <span
              onClick={onClick(image.id)}
              >See more</span>

              <Modal
                className="modal modal-desserts modal-picture"
                id={image.id}
                actions={<div></div>}
                modalOptions={{
                  opacity: 0.6,
                  outDuration: 300,
                  startingTop: '9rem',
                  endingTop: '7.5rem',
                  preventScrolling: false,
                  fixedFooter: false,
                }}
              >
                <DessertCarousel
                  image={image}
                  secondaryImages={image.secondaryImages}
                />
              </Modal>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
