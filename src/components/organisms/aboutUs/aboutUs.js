import React from 'react';
import styled from 'styled-components';

import AboutUsBox from '../../molecules/aboutUsComp/aboutUsBox';
import ExperienceBox from '../../molecules/aboutUsComp/experienceBox';

const Wrapper = styled.section`
  height: 1000px;
  background-color: ${({ theme }) => theme.backgroundAboutUs};
  display: flex;
  justify-content: space-between;
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
