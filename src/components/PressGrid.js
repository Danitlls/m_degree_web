import React from 'react';
import Image from './Image';
import { Modal, Icon, Row, Col } from 'react-materialize';
import './pressGrid.css';

function onClick(imageId) {
  return function() {
    global.$(`#${imageId}`).modal('close');
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
          className='press-card'
          style={{
             border: '0px solid red',
           }}>
             <div style={{
                border: '0px solid yellow', padding: '1rem 1rem', background : 'white'}}>
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
                  <div className="col s12 l8">
                    <Image image={image} />
                  </div>
                  <div className="col m6 l4 m-degree-press-modal-footer">
                    <h5>{image.name}</h5>
                    <p>{image.description}</p>
                    <p style={{
                      fontSize: '.7rem',
                      margin: 0,
                    }}>{image.type}</p>
                    <p style={{
                      margin: 0,
                    }}>{image.date}</p>
                  </div>
                  <div className="col m6 l4 ">
                  {(image.secondaryImages || []).map(image => {
                    return (<img
                      className={image.className}
                      src={image.imageUrl}
                      name={image.name}
                      />);
                    })}
                  </div>
                </div>
              </Modal>
              <h6>{image.type}</h6>
              <p>{image.date}</p>
              <div className="brand-image">
                <img src={image.brandImage} />
              </div>
              <span>See More</span>
            </div>
          </Col>
        );
      })}
      </Row>

    </div>
  );
}
