import React from 'react';
import styled from 'styled-components';
import AdderImageGallery from '../../atoms/addImagerGalery/addImagerGalery';
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
    opacity: 0.8;
    position: relative;
  }

  .popup::before {
    content: '';
    position: absolute;
    background-color: red;
    width: 100%;
    height: 100%;
    left: 0;
    opacity: 0.7;
  }

  .popupText {
    display: none;
    position: absolute;
    bottom: 20px;
    left: 10px;
  }
  .dispBlock {
    display: block;
  }

  .Image {
    width: 280px;
    height: 330px;
    position: relative;
  }

  @media all and (max-width: 500px) {
    margin: 15px 2px;
  }
`;

class GalleryImage extends React.Component {
  state = {
    Items: [
      {
        id: 1,
        image: Image1,
        description: 'Soft Blonde colourization',
      },
      {
        id: 2,
        image: Image2,
        description: 'Soft Blonde colourization',
      },
      {
        id: 3,
        image: Image3,
        description: 'Soft Blonde colourization',
      },
      {
        id: 4,
        image: Image4,
        description: 'Soft Blonde colourization',
      },
      {
        id: 5,
        image: Image5,
        description: 'Soft Blonde colourization',
      },
      {
        id: 6,
        image: Image6,
        description: 'Soft Blonde colourization',
      },
    ],
  };

  togglePopup = (e) => {
    e.target.closest('.Image').classList.toggle('popup');
    const popupText = e.target.closest('.Image').querySelector('.popupText');
    popupText.classList.toggle('dispBlock');
  };

  render() {
    return (
      <Wrapper>
        {this.state.Items.map((item) => (
          <WrapperItem>
            <AdderImageGallery
              className="Image"
              key={item.key}
              icons={item.image}
              onMouseEnter={this.togglePopup}
              onMouseLeave={this.togglePopup}
            >
              <div className="popupText">
                <Pharagraph white>{item.description}</Pharagraph>
              </div>
            </AdderImageGallery>
          </WrapperItem>
        ))}
      </Wrapper>
    );
  }
}

export default GalleryImage;
