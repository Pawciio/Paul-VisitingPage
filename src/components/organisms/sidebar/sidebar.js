import React from 'react';
import styled, { keyframes } from 'styled-components';

import Pharagraph from '../../atoms/pharagraph/pharagraph';
import Register from '../../atoms/register/register';
import madlenePage from '../../../assets/MadlenePageImage.png'

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
  max-width: 300px;
  height: 100vh;
  position: fixed;
  z-index: 2;

  @media (max-width: 1310px) {
    padding: 3rem 0;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    width: ${({ open }) => (open ? '300px' : '20px')};
  }
`;

const WrapperGroup = styled.div`
  padding: 30px 50px;

  @media (max-width: 1310px) {
    position: absolute;
    animation: ${leftEnter} 0.5s ease-in-out;
    display: ${({ open }) => (open ? 'block' : 'none')};
  }

  .signature{
    transform: scale(0.5);
    position: relative;
    left: -40px;
  }
`;

const WrapperItem = styled.div`
  padding: 10px 10px;
`;

const Sidebar = ({ open }) => {

  // TESTOWANE rozwiązanie ale działa
  
  window.addEventListener('scroll', () => {
    // pobrana liczba z registera bazowa 1
    let numberSection =  document.querySelector('.changeNumberSecton')
    // pobrana lista sekcji z dokumentu
    const sectionCollection = document.querySelectorAll('section')
    // console.log(sectionCollection);

    // dla 1 sekcji => 1 - 250px
    if (window.scrollY < sectionCollection[0].scrollHeight - 250) {
      numberSection.innerText = '01';
    }
    // dla 2 sekcji => 1 + 2 - 250px && scrollY jest większe od 1
    if (window.scrollY < sectionCollection[0].scrollHeight + sectionCollection[1].scrollHeight  - 250 &&
       window.scrollY > sectionCollection[0].scrollHeight ) {
      numberSection.innerText = '02';
    }
    // dla 3 sekcji => 1 + 2 + 3 - 250px && scrollY jest większe od 1 + 2
    if (window.scrollY < sectionCollection[0].scrollHeight + sectionCollection[1].scrollHeight + sectionCollection[2].scrollHeight  - 250 &&
      window.scrollY > sectionCollection[0].scrollHeight + sectionCollection[1].scrollHeight) {
     numberSection.innerText = '03';
    }
    // dla 4 sekcji => 1 + 2 + 3 + 4 - 250px && scrollY jest większe od 1 + 2 + 3
    if (window.scrollY < sectionCollection[0].scrollHeight + sectionCollection[1].scrollHeight + sectionCollection[2].scrollHeight + 
      sectionCollection[3].scrollHeight  - 250 && window.scrollY > sectionCollection[0].scrollHeight + 
      sectionCollection[1].scrollHeight + sectionCollection[2].scrollHeight) {
      numberSection.innerText = '04';
    }
  })

  // KONIEC testowego rozwiązania

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
        <img className='signature' src={madlenePage} alt='signature' /> 
      </WrapperGroup>
    </Background>
  );
};

export default Sidebar;
