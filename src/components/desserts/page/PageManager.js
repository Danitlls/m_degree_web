import React, { Component } from 'react';
import ImageGrid from './ImageGrid';
import PageImage from './PageImage';
import ImageModal from './ImageModal';

export default class PageManager extends Component {

  state = {
    show: false,
    selectedImage: {
      secondaryImages: []
    },
  }

  onShow = (image) => {
    return () => {
      this.setState({
        show: true,
        selectedImage: image,
      });
    };
  };

  onClose = () => {
    return () => {
      this.setState({
        show: false,
        selectedImage: {
          secondaryImages: []
        },
      });
    }
  };


  render() {
    return (
      <div>
        <ImageGrid>
          {this.props.images.map(image => <PageImage key={image.id} onClick={this.onShow} image={image} />)}
        </ImageGrid>
        <ImageModal
          onClose={this.onClose}
          images={[this.state.selectedImage]
            .concat(this.state.selectedImage.secondaryImages)
            .filter(image => !!image)
          }
          show={this.state.show}
        />
      </div>
    );
  }

}
