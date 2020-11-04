import React from 'react';
import styled from 'styled-components';
import GalleryImage from '../galleryImage/galleryImage';

const Wrapper = styled.section`
  background: ${({ theme }) => theme.white};
  margin-left: 333px;
  padding: 50px;
  display: flex;
  justify-content: center;
`;

const Gallery = () => {
  return (
    <Wrapper>
      <GalleryImage />
    </Wrapper>
  );
};

export default Gallery;
