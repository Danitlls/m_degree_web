import React from 'react';
import Image from './Image';
import { Modal, Icon, Row, Col } from 'react-materialize';
import './pressGrid.css';
import ImageModalContent from './ImageModalContent';


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
              <Image image={image} />

              <Modal className="modal modal-press modal-picture" modalOptions={{
                opacity: 0.2,
                outDuration: 300,
                startingTop: '7rem',
                endingTop: '7rem',
                preventScrolling: false,
              }} id={image.id} actions={<div></div>}>
                <div className="right" onClick={onClick(image.id)}>
                  <Icon className="close-modal">close</Icon>
                </div>
                <div className="row">

                <ImageModalContent
                  image={image}
                  secondaryImages={image.secondaryImages}
                />

                  <div className="col s12 m-degree-press-modal-footer">

                    <h5>{image.name}</h5>
                    <p>{image.description}</p>
                    <p>{image.country}</p>
                    <p style={{
                      fontSize: '.7rem',
                      margin: 0,
                    }}>{image.type}</p>
                    <p style={{
                      margin: 0,
                    }}>{image.date}</p>
                    <div className="brand-image">
                    <img src={image.brandImage} />
                    </div>
                  </div>
                </div>
              </Modal>

              <div className="brand-image">
              <img src={image.brandImage} />
              </div>
              <h6>{image.type}</h6>
              <p>{image.date}</p>
              <span onClick={onClickModal(image.id)}>See More</span>
            </div>
          </Col>
        );
      })}
      </Row>

    </div>
  );
}
