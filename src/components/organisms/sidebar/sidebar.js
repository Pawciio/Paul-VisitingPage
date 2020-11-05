import React from 'react';
import styled, { keyframes } from 'styled-components';

import Pharagraph from '../../atoms/pharagraph/pharagraph';
import Register from '../../atoms/register/register';

const leftEnter = keyframes`
  from {
    left: -50px;
    opacity: 0;
  }

  to {
    left: 0;
    opacity: 1;
  }
`;

const Background = styled.div`
  background: ${({ theme }) => theme.additionalColor};
  max-width: 450px;
  height: 100vh;
  position: fixed;

  @media (max-width: 1310px) {
    padding: 3rem 0;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    width: ${({ open }) => (open ? '300px' : '40px')};
  }
`;

const WrapperGroup = styled.div`
  padding: 30px 50px;

  @media (max-width: 1310px) {
    position: absolute;
    animation: ${leftEnter} 0.5s ease-in-out;
    display: ${({ open }) => (open ? 'block' : 'none')};
  }
`;

const WrapperItem = styled.div`
  padding: 10px 10px;
`;

const Sidebar = ({ open }) => {
  const Items = [
    {
      heading: 'owner',
      description: 'Madlene Page',
    },
    {
      heading: 'phone number',
      description: '+48 594 672 669',
    },
    {
      heading: 'email',
      description: 'prettywoman@gmail.com',
    },
    {
      heading: 'location',
      description: 'Gwardia St. 45 New York',
    },
  ];

  return (
    <Background open={open}>
      <WrapperGroup open={open}>
        <WrapperItem>
          <Register />
        </WrapperItem>
        {Items.map((item) => (
          <WrapperItem>
            <Pharagraph upper>{item.heading}</Pharagraph>
            <Pharagraph white>{item.description}</Pharagraph>
          </WrapperItem>
        ))}
      </WrapperGroup>
    </Background>
  );
};

export default Sidebar;
