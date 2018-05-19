import React, { Component } from 'react';
import Image from './Image';
import { Icon } from 'react-materialize';
import './imageModalcontent.css';

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
        <div className="row">
          <div className="col s12 l9 main-image">
            <Image image={selectedImage} />
          </div>
          <div className= "col s12 m12 l3 m-degree-modal-footer">
            <h5>{image.name}</h5>
            <p>{image.description}</p>
            <div className="row-of-images" >
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
