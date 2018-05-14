import React from 'react';
import Image from './Image';
import { Modal, Icon, Row, Col } from 'react-materialize';
import './imageGrid.css';

function onClick(imageId) {
  return function() {
    global.$(`#${imageId}`).modal('close');
  }
}

export default function PressGrid({ images }) {
  return (
    <div className="m-degree-container" >
      <h3>Press & Collaborations</h3>
      <Row style={{
       margin: '.5rem auto',
      }}>
      {images.map(image => {
        return (
          <Col s={image.smCol || 12}  m={image.mCol || 6} l={image.mCol || 4}  className='press-card' style={{
             border: '0px solid red' , }}>
             <div style={{
                border: '0px solid yellow', padding: '1rem 1rem', background : '#f7f3f3',  background : '#efefef',}}>
              <Image image={image} />

              <Modal className="modal" modalOptions={{
                opacity: 0.2,
                outDuration: 300,
                startingTop: '7rem',
                endingTop: '7rem',
                preventScrolling: false,
              }} className="modal-picture" id={image.id} actions={<div></div>}>
                <div className="right" onClick={onClick(image.id)}>
                  <Icon className="close-modal">close</Icon>
                </div>
                <Image image={image} />
                {(image.secondaryImages || []).map(image => {
                  return (<img
                    className={image.className}
                    src={image.imageUrl}
                    name={image.name}
                    />);
                  })}

                <div className="m-degree-modal-footer">
                  <h5>{image.name}</h5>
                  <p>{image.date}</p>
                  <p>{image.type}</p>
                  <p>{image.description}</p>
                  <p></p>
                </div>
              </Modal>
              <h5>{image.name}</h5>
              <p>{image.date}</p>
            </div>
          </Col>
        );
      })}
      </Row>

    </div>
  );
}
