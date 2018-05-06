import React from 'react';
import Image from './Image';
import { Modal, Button, Icon } from 'react-materialize';
import './imageGrid.css';

function onClick(imageId) {
  return function() {
    global.$(`#${imageId}`).modal('close');
  }
}

export default function ImageGrid({ images }) {
  return (
    <div>
    {images.map(image => {
      return (
        <div style={{
          margin: '10px'
        }}>
          <Image image={image} width='100px' height='100px' />
          <Modal className="modal-picture" id={image.id} actions={<div></div>}>
            <div onClick={onClick(image.id)}>
              <Icon className="close-modal">close</Icon>
            </div>
            <Image image={image} width='400px' height='400px' />
          </Modal>
        </div>
      );
    })}
    </div>
  );
}
