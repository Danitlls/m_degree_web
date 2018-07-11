import React, { Component } from 'react';
import PressImageGrid from './PressImageGrid';
import PressPageImage from './PressPageImage';
import PressImageModal from './PressImageModal';

export default class PressPageManager extends Component {

  state = {
    show: false,
    selectedImage: {},
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
        selectedImage: {},
      });
    }
  };


  render() {
    return (
      <div>
        <PressImageGrid>
          {this.props.images.map(image => <PressPageImage onClick={this.onShow} image={image} />)}
        </PressImageGrid>
        <PressImageModal
          onClose={this.onClose}
          images={[this.state.selectedImage].concat(this.state.selectedImage.secondaryImages)}
          show={this.state.show}
        />
      </div>
    );
  }

}
