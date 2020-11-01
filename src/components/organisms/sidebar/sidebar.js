import React from 'react';
import styled from 'styled-components';

import Pharagraph from '../../atoms/pharagraph/pharagraph';
import Register from '../../atoms/register/register';

const Background = styled.div`
  background: ${({ theme }) => theme.additionalColor};
  max-width: 450px;
  float: left;
  height: 100vh;
`;

const WrapperGroup = styled.div`
  padding: 30px 50px;
`;

const WrapperItem = styled.div`
  padding: 10px 10px;
`;

const Sidebar = () => (
  <Background>
    <WrapperGroup>
      <WrapperItem>
        <Register />
      </WrapperItem>
      <WrapperItem>
        <Pharagraph upper>owner</Pharagraph>
        <Pharagraph white>Madlene Page</Pharagraph>
      </WrapperItem>
      <WrapperItem>
        <Pharagraph upper>location</Pharagraph>
        <Pharagraph white>
          Gwardia St. 45 <br />
          New York
        </Pharagraph>
      </WrapperItem>
      <WrapperItem>
        <Pharagraph upper>phone number</Pharagraph>
        <Pharagraph white>+48 594 672 669</Pharagraph>
      </WrapperItem>
      <WrapperItem>
        <Pharagraph upper>email</Pharagraph>
        <Pharagraph white>prettywoman@gmail.com</Pharagraph>
      </WrapperItem>
    </WrapperGroup>
  </Background>
);

export default Sidebar;
