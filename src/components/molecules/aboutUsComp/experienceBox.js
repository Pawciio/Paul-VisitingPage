import React from 'react';
import styled from 'styled-components';

import Heading from '../../atoms/heading/heading';
import Pharagraph from '../../atoms/pharagraph/pharagraph';
import Circle from '../../atoms/additional/circle';
import VerticalLine from '../../atoms/additional/verticalLine';

const WrapperExperienceBox = styled.div`
  padding: 100px 100px 100px 0;
  display: flex;
  flex-direction: column;
  width: 50%;

  .space {
    width: 70%;
  }
`;

const SpaceBox = styled.div`
  width: 55px;
`;

const WrapperAddicional = styled.div`
  display: flex;
  align-items: center;
`;

const ExperienceBox = () => {
  const Items = [
    {
      date: '2015',
      description:
        'First Kemon training made by Madlene, joining to the team Alicia Bothies. Opened the first salon in New Town.',
      verticalLine: true,
    },
    {
      date: '2017',
      description:
        'Finished doing the best trainings from other schools like Hair Academy by Adam Stancer.',
      verticalLine: true,
    },
    {
      date: '2019',
      description:
        'Joined the Hair Army association. Finished the keratin complex treatmeant training.',
      verticalLine: true,
    },
    {
      date: '2020',
      description: 'Opened new location of our Pretty Woman salon in New York.',
      verticalLine: false,
    },
  ];

  return (
    <WrapperExperienceBox>
      <Heading head>Experience</Heading>
      {Items.map((item) => (
        <>
          <WrapperAddicional>
            <Circle />
            <Heading head secondary>
              {item.date}
            </Heading>
          </WrapperAddicional>
          <WrapperAddicional>
            {item.verticalLine ? <VerticalLine /> : <SpaceBox />}
            <Pharagraph secondary light big className="space">
              {item.description}
            </Pharagraph>
          </WrapperAddicional>
        </>
      ))}
    </WrapperExperienceBox>
  );
};
export default ExperienceBox;
