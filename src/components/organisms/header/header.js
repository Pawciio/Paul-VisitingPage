import React from 'react';
import styled from 'styled-components';

import Jumbo from '../../molecules/jumbo/jumbo';
import Image from '../../../assets/header.png';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.white};
  display: flex;
  justify-content: space-between;
  img {
    max-width: 500px;
  }
`;

const Header = () => (
  <Wrapper>
    <Jumbo />
    <img src={Image} alt="hairImage" />
  </Wrapper>
);

export default Header;
