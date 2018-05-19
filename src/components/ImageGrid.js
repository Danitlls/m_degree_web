import React from 'react';
import Image from './Image';
import { Modal, Row, Col } from 'react-materialize';
import ImageModalContent from './ImageModalContent';
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
              s={image.smCol || 6}
              m={image.mCol || 6}
              l={image.lCol || 4}
              className='dessert-image'
            >
              <Image image={image} />
              <div className="plus hide-on-med-and-up" >
                <i class="material-icons">fullscreen</i>
              </div>
              <span
              onClick={onClick(image.id)}
              >See more</span>

              <Modal
                className="modal modal-desserts modal-picture"
                id={image.id}
                actions={<div></div>}
                modalOptions={{
                  opacity: 0.2,
                  outDuration: 300,
                  startingTop: '7rem',
                  endingTop: '7rem',
                  preventScrolling: false,
                  fixedFooter: false,
                }}
              >
                <ImageModalContent
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
