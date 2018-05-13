import React from 'react';
import Image from './Image';
import { Modal, Icon, Row, Col } from 'react-materialize';
import './imageGrid.css';

function onClick(imageId) {
  return function() {
    global.$(`#${imageId}`).modal('close');
  }
}

export default function ImageGrid({ images }) {
  return (
    <div className="m-degree-container" style={{
     // border: '1px solid grey'
    }}>
    <Row className="desserts-container">
    {images.map(image => {
      return (
        <Col s={image.smCol || 6}  m={image.mCol || 4} className='' style={{
           border: '0px solid lightgrey', padding: '5px 10px'
        }}>
          <Image image={image} />
          <Modal className="modal" modalOptions={{
            opacity: 0.2,
            outDuration: 300,
            startingTop: '3rem',
            endingTop: '3rem',
            preventScrolling: false,
            fixedFooter: false,
          }} className="modal-picture" id={image.id} actions={<div></div>}>
            <div className="right" onClick={onClick(image.id)}>
              <Icon className="close-modal">close</Icon>
            </div>
            <Image image={image} />
            <div className= "m-degree-modal-footer">
              <p>{image.name}</p>
              {(image.secondaryImages || []).map(image => {
                return (<img
                  className={image.className}
                  src={image.imageUrl}
                  name={image.name}
                />);
              })}
            </div>
          </Modal>
        </Col>
      );
    })}
    </Row>
    </div>
  );
}
