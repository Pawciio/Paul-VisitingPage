import React from 'react';
import styled from 'styled-components';

import Pharagraph from '../../atoms/pharagraph/pharagraph';
import Image1 from '../../../assets/galleryImage/image1.png';
import Image2 from '../../../assets/galleryImage/image2.png';
import Image3 from '../../../assets/galleryImage/image3.png';
import Image4 from '../../../assets/galleryImage/image4.png';
import Image5 from '../../../assets/galleryImage/image5.png';
import Image6 from '../../../assets/galleryImage/image6.png';

const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WrapperItem = styled.div`
  margin: 25px;

  img {
    max-width: 250px;
    max-height: 300px;
    position: relative;
    z-index: 1;
  }

  .popup {
    width: 250px;
    height: 298px;
    background: red;
    opacity: 0.8;
    position: absolute;
    display: flex;
    align-items: flex-end;
    visibility: hidden;
    z-index: 2;

    .popup-text {
      letter-spacing: 1px;
      font-size: 20px;
      margin: 8px;
    }
  }
  .visible {
    visibility: visible;
  }
`;

class GalleryImage extends React.Component {
  state = {
    showPopup: false,
    Items: [
      {
        image: Image1,
        description: 'Soft Blonde colourization',
      },
      {
        image: Image2,
        description: 'Soft Blonde colourization',
      },
      {
        image: Image3,
        description: 'Soft Blonde colourization',
      },
      {
        image: Image4,
        description: 'Soft Blonde colourization',
      },
      {
        image: Image5,
        description: 'Soft Blonde colourization',
      },
      {
        image: Image6,
        description: 'Soft Blonde colourization',
      },
    ],
  };

  handleBoxToogle = () => this.setState({ showPopup: !this.state.showPopup });

  handleBoxTrue = () => this.setState({ showPopup: true });
  handleBoxFalse = () => this.setState({ showPopup: false });

  closestEl = () => {
    const test = document.querySelectorAll('.popup');
    console.log(test.closest('img'));
  };

  render() {
    return (
      <Wrapper>
        {this.state.Items.map((item) => (
          <WrapperItem>
            <div
              onMouseMove={this.handleBoxTrue}
              onMouseLeave={this.handleBoxFalse}
              className={`popup ${this.state.showPopup ? 'visible' : ''}`}
            >
              <Pharagraph white className="popup-text">
                {item.description}
              </Pharagraph>
            </div>
            <img src={item.image} alt="ImageHair" onMouseMove={this.handleBoxToogle} />
          </WrapperItem>
        ))}
      </Wrapper>
    );
  }
}

export default GalleryImage;
