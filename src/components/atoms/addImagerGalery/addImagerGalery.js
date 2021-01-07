import styled from 'styled-components';

const AdderImageGallery = styled.div`
  background-image: url(${({ icons }) => icons});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;

export default AdderImageGallery;
