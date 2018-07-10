import React from 'react';
import Image from '../Image';
import { Modal, Icon, Row, Col } from 'react-materialize';
import './pressGrid.css';
import PressImageModalContent from './PressImageModalContent';


function onClick(imageId) {
  return function() {
    global.$(`#${imageId}`).modal('close');
  }
}
function onClickModal(imageId){
  return function() {
    global.$(`#${imageId}`).modal('open');
  }
}

export default function PressGrid({ images }) {
  return (
    <div className="m-degree-c" >

      <Row style={{
       margin: '.5rem auto',
      }}>
      {images.map(image => {
        return (
          <Col s={image.smCol || 12}  m={image.mCol || 6} l={image.lCol || 4}
          className='press-card'>
             <div className='card-img'>
              <img src={image.coverPhoto} onClick={onClickModal(image.id)} />
</div>
              <Modal className="modal modal-press modal-picture" modalOptions={{
                opacity: 0.2,
                outDuration: 300,
                startingTop: '7rem',
                endingTop: '3rem',
                preventScrolling: false,
              }} id={image.id} actions={<div></div>}>
                <div className="right" onClick={onClick(image.id)}>
                  <Icon className="close-modal">close</Icon>
                </div>
                <div className="row">

                <PressImageModalContent
                  image={image}
                  secondaryImages={image.secondaryImages}
                />
                  <div className="col s12 m-degree-press-modal-footer">
                  </div>
                </div>
              </Modal>

              <div className="brand-image">
                <img src={image.brandImage} />
              </div>
              <h6>{image.type}</h6>
              <div className="text-press">
                <p>{image.country}</p>
                <p>{image.date}</p>
              </div>

              <span onClick={onClickModal(image.id)}>See More</span>

          </Col>
        );
      })}
      </Row>

    </div>
  );
}
