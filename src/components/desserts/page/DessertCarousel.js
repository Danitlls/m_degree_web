import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './dessertCarousel.css';

export default class DessertCarousel extends Component {
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
              <img  width={800} height={"100%"} src={image.imageUrl} />
            </Carousel.Item>
          )}
        </Carousel>
        <div className="image-description">
          <h5>{activeImage.name}</h5>
          <p>{activeImage.description}</p>
        </div>
      </div>
    );
  }
}
