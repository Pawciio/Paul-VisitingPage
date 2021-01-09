import React from 'react';
import styled from 'styled-components';

import Heading from '../../atoms/heading/heading';
import Pharagraph from '../../atoms/pharagraph/pharagraph';
import SocialMedia from '../../molecules/linksSocialMedia/linksSocialMedia';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-self: flex-end;

  h1 {
    text-transform: uppercase;
    font-size: 50px;
    color: ${({ theme }) => theme.textColorSecondary};
    margin: 0;
    text-align: center;
  }

  p {
    max-width: 570px;
    margin: 10px;
    text-align: center;
  }

  .titleName {
    color: ${({ theme }) => theme.additionalColor};
  }

  @media all and (max-width: 970px) {
      .titleName {
      color: ${({ theme }) => theme.white};
    }
      p{
        color: ${({ theme }) => theme.white};
    }
  }
`;

const Jumbo = () => (
  <Wrapper>
    <h1>Pretty woman</h1>
    <Heading className="titleName">Hair salon</Heading>
    <Pharagraph secondary>
      Pretty Woman is a hair salon in New York. This page is supposed to provide info about our
      salon, offer and already made hairstyles, as well as transformations.
    </Pharagraph>
    <SocialMedia />
  </Wrapper>
);

export default Jumbo;
