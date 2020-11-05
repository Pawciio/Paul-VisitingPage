import React from 'react';
import styled from 'styled-components';

import Heading from '../../atoms/heading/heading';
import ServicesBox from '../../molecules/serviceBox/serviceBox';

const Wrapper = styled.section`
  background: ${({ theme }) => theme.backgroundServices};
  margin-left: 333px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1310px) {
    margin-left: 20px;
  }
`;

const Services = () => (
  <Wrapper>
    <Heading head>Services</Heading>
    <ServicesBox />
  </Wrapper>
);

export default Services;
