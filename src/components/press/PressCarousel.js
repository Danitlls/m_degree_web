import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export default class PressCarousel extends Component {
  state = {
    index: 0,
    direction: null,
    activeImage: this.props.images[0] || {},
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
      activeImage: this.props.images[selectedIndex] || {},
    });
  };

  render() {
    const { index, direction, activeImage } = this.state;
    return (
      <div>
        <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
          {this.props.images.map(image => image &&
            <Carousel.Item>
              <img width={900} height={700} src={image.imageUrl} />
            </Carousel.Item>
          )}
        </Carousel>
        <div className="image-description" style={{ "top": "77vh"}}>
          <h5>{activeImage.name}<span> / {activeImage.date}</span></h5>
          <p className="mb-2">{activeImage.country}</p>
          <p>{activeImage.description}</p>
        </div>
      </div>
    );
  }
}
