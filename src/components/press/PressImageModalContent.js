import React, { Component } from 'react';
import Image from '../desserts/page/Image';
import { Icon } from 'react-materialize';
import './pressImageModalcontent.css';

export default class ImageModalContent extends Component {

  static defaultProps = {
    image: {},
    secondaryImages: [],
  }

  state = {
    selectedImage: {},
    secondaryImages: [],
  }

  componentDidMount() {
    this.resetImageState();
  }

  resetImageState() {
    const { image, secondaryImages } = this.props;
    const images = secondaryImages.length > 0
      ? secondaryImages.concat([image])
      : [];
    this.setState({
      selectedImage: image,
      secondaryImages: images,
    });
  }

  closeModal(imageId) {
    const self = this;
    return function() {
      global.$(`#${imageId}`).modal('close');
      setTimeout(() => self.resetImageState(), 1000);
    }
  }

  changeImage(image) {
    const self = this;
    return function() {
        self.setState({ selectedImage: image });
    }
  }

  render() {
    const { image } = this.props;
    const { selectedImage, secondaryImages } = this.state;
    return (
      <div>
        <div className="right" onClick={this.closeModal(image.id)}>
          <Icon className="close-modal">close</Icon>
        </div>
        <div className="row press-1">
          <div className="col s12 main-image">
            <Image image={selectedImage} />
          </div>
          <div className= "col s12 m12 m-degree-press-modal-footer">
            <h5>{image.name}<span> / {image.date}</span></h5>
            <p>{image.description}</p>
            <div className="press-row-of-images" >
              {(secondaryImages).map(secondaryImage => {
                return (
                  <img
                    key={secondaryImage.id}
                    onClick={this.changeImage(secondaryImage)}
                    className={secondaryImage.secondaryImageClassName}
                    src={secondaryImage.imageUrl}
                    name={secondaryImage.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
