import React from 'react';
import DessertCarousel from './DessertCarousel';
import { Modal, Glyphicon } from 'react-bootstrap';
import './imageModal.css';

export default function ImageModal({ images, show, onClose }) {
  return (
    <Modal
      className="modal modal-desserts modal-picture"
      show={show}
      container={this}
      onHide={onClose}
    >
      <div className="close-modal-icon" onClick={onClose()}>
        <Glyphicon className="close-modal" glyph="remove" />
      </div>
      <DessertCarousel images={images} />
    </Modal>
  );
}
