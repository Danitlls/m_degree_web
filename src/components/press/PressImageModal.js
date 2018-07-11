import React from 'react';
import PressCarousel from './PressCarousel';
import { Modal, Glyphicon } from 'react-bootstrap';
import './pressGrid.css';

export default function PressImageModal({ images, show, onClose }) {
  return (
    <Modal
      className="modal modal-press modal-picture"
      show={show}
      container={this}
      onHide={onClose}
    >
      <div className="close-modal-icon" onClick={onClose()}>
        <Glyphicon className="close-modal" glyph="remove" />
      </div>
      <PressCarousel images={images} />
    </Modal>
  );
}
