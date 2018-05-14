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
        <Col s={image.smCol || 6}  m={image.mCol || 6}  l={image.lCol || 4}  style={{
           border: '0px solid lightgrey', padding: '3px 6px'
        }}>
          <Image image={image} />
          <Modal className="modal modal-desserts" modalOptions={{
            opacity: 0.2,
            outDuration: 300,
            startingTop: '7rem',
            endingTop: '7rem',
            preventScrolling: false,
            fixedFooter: false,
          }} className="modal-picture" id={image.id} actions={<div></div>}>
            <div className="right" onClick={onClick(image.id)}>
              <Icon className="close-modal">close</Icon>
            </div>
            <div className="row">
              <div className="col s12 l9">
                <Image image={image} />
              </div>
              <div className= "col s12 m7 l3 m-degree-modal-footer">
                <h5>{image.name}</h5>
                <p>{image.description}</p>
              </div>
              <div className= "col s12 m5 l3">
                <div className="row">
                  <div className="col s12"  style={{
                   padding: '0',
                  }}>
                    {(image.secondaryImages || []).map(image => {
                      return (<img
                        className={image.className}
                        src={image.imageUrl}
                        name={image.name}
                      />);
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </Col>
      );
    })}
    </Row>
    </div>
  );
}
