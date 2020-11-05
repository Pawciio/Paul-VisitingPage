import React from 'react';
import styled from 'styled-components';

import AboutUsBox from '../../molecules/aboutUsComp/aboutUsBox';
import ExperienceBox from '../../molecules/aboutUsComp/experienceBox';

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.backgroundAboutUs};
  display: flex;
  flex-wrap: wrap;
  margin-left: 333px;

  @media (max-width: 1310px) {
    margin-left: 20px;
  }
`;

// const Boxs = styled.div`
//   background-color: teal;
// `;

const AboutUs = () => (
  <Wrapper>
    <AboutUsBox />
    <ExperienceBox />
  </Wrapper>
);

export default AboutUs;
