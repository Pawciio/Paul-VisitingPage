import React from 'react';
import styled from 'styled-components';

import Heading from '../../atoms/heading/heading';
import Pharagraph from '../../atoms/pharagraph/pharagraph';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  h1 {
    text-transform: uppercase;
    font-size: 50px;
    color: ${({ theme }) => theme.textColorSecondary};
    margin: 0;
  }

  p {
    max-width: 570px;
    margin: 10px;
  }
`;

const Jumbo = () => (
  <Wrapper>
    <h1>Pretty woman</h1>
    <Heading>Hair salon</Heading>
    <Pharagraph secondary>
      Pretty Woman is a hair salon in New York. This page is supposed to provide info about our
      salon, offer and already made hairstyles, as well as transformations.
    </Pharagraph>
  </Wrapper>
);

export default Jumbo;
