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
    <div style={{
     border: '1px solid grey'
    }}>
    <Row>
    {images.map(image => {
      return (
        <Col s={6}  m={4} className='' style={{
           border: '1px solid lightgrey'
        }}>
          <Image image={image} />
          <Modal className="modal-picture" id={image.id} actions={<div></div>}>
            <div onClick={onClick(image.id)}>
              <Icon className="close-modal">close</Icon>
            </div>
            <Image image={image} />
            <p>{image.name}</p>
            {(image.secondaryImages || []).map(image => {
              return (<img
                className={image.className}
                src={image.imageUrl}
                name={image.name}
              />);
            })}
          </Modal>
        </Col>
      );
    })}
    </Row>
    </div>
  );
}
