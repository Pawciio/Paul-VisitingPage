import React from 'react';
import styled from 'styled-components';

import Jumbo from '../../molecules/jumbo/jumbo';
import Image from '../../../assets/header.png';

const Wrapper = styled.section`
  background: ${({ theme }) => theme.white};
  display: flex;

  justify-content: space-between;
  margin-left: 333px;
  img {
    max-width: 500px;
  }

  @media (max-width: 1310px) {
    margin-left: 20px;
  }

  @media (max-width: 970px) {
    background-image: url(../../../assets/header.png);
    background: none;
    padding-top: 30px;

    img {
      display: none;
    }
  }
`;

const Header = () => (
  <Wrapper>
    <Jumbo />
    <img src={Image} alt="hairImage" />
  </Wrapper>
);

export default Header;
