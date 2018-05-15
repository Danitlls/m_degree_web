import React from 'react';
import Image from './Image';
import { Modal, Row, Col } from 'react-materialize';
import ImageModalContent from './ImageModalContent';
import './imageGrid.css';

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
              style={{
                border: '0px solid lightgrey',
                padding: '3px 6px'
              }}
            >
              <Image image={image} />
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
