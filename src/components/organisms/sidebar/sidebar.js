import React from 'react';
import styled from 'styled-components';

import Pharagraph from '../../atoms/pharagraph/pharagraph';
import Register from '../../atoms/register/register';

const Background = styled.div`
  background: ${({ theme }) => theme.additionalColor};
  max-width: 450px;
  height: 100vh;
  position: fixed;
`;

const WrapperGroup = styled.div`
  padding: 30px 50px;
`;

const WrapperItem = styled.div`
  padding: 10px 10px;
`;

const Sidebar = () => {
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
    <Background>
      <WrapperGroup>
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
