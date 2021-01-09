import React from 'react';
import styled from 'styled-components';

import Heading from '../../atoms/heading/heading';
import Pharagraph from '../../atoms/pharagraph/pharagraph';

import Color from '../../../assets/servicesImage/Color.png';
import Haircut from '../../../assets/servicesImage/Haircut.png';
import Hairstyle from '../../../assets/servicesImage/Hairstyle.png';
import Treatments from '../../../assets/servicesImage/Treatments.png';

const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WrapperItem = styled.div`
  background: ${({ theme }) => theme.sidebar};
  max-width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 30px;
  padding: 20px;
  margin: 50px;

  p {
    width: 90%;
  }

  img {
    width: 120px;
    height: 120px;
  }

  @media all and (max-width: 500px) {
    margin: 15px 5px;
  }
`;

const ServiceBox = () => {
  const Items = [
    {
      img: Color,
      title: 'Colorization',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    },
    {
      img: Haircut,
      title: 'professional haircut',
      description:
        'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
      img: Hairstyle,
      title: 'ocassional hairstyling',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.',
    },
    {
      img: Treatments,
      title: 'hair treatments',
      description:
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.',
    },
  ];

  return (
    <Wrapper>
      {Items.map((item) => (
        <WrapperItem>
          <img src={item.img} alt="color" />
          <Heading head secondary upper>
            {item.title}
          </Heading>
          <Pharagraph white>{item.description}</Pharagraph>
        </WrapperItem>
      ))}
    </Wrapper>
  );
};

export default ServiceBox;
