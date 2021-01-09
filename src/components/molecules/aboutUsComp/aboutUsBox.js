import React from 'react';
import styled from 'styled-components';

import Heading from '../../atoms/heading/heading';
import Pharagraph from '../../atoms/pharagraph/pharagraph';

const Wrapper = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;

  .space {
    padding: 10px;
  }

  @media all and (max-width: 1000px) {
    padding: 25px;
  }
  @media all and (max-width: 750px) {
    max-width: 100%;
  }
`;

const AboutUsBox = () => {
  const Items = [
    {
      descriptions:
        'Pretty Woman is a hair salon in New York, providing the best serives ever by the main stylist Madlene Page.',
      bold: true,
    },
    {
      descriptions:
        'The salon offers many awesome things, from simple colorisations to amazing hair treatments that make the hair shiny and healthy. We provide the best services. We’re working with best quality products from the line - Kemon. Lorem ipsum something and lots of text here. Would love to make your hair as well.',
      bold: false,
    },
    {
      descriptions:
        'There are many companies we work with to give you the best looks you could imagine. Finished doing the best trainings from other schools like Hair Academy by Adam Stancer. Joined the Hair Army association. Finished the keratin complex treatmeant training.',
      bold: false,
    },
  ];

  return (
    <Wrapper>
      <Heading head>About us</Heading>
      {Items.map((item) => (
        <>
          {item.bold ? (
            <Pharagraph className="space" secondary big bold>
              {item.descriptions}
            </Pharagraph>
          ) : (
            <Pharagraph className="space" secondary>
              {item.descriptions}
            </Pharagraph>
          )}
        </>
      ))}
    </Wrapper>
  );
};
export default AboutUsBox;
