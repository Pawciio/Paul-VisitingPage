import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.textColorSecondary};
  display: flex;
  margin-top: 100px;
  flex-wrap: wrap;
  justify-content: center;
  align-self: stretch;

  a {
    margin: 10px;
    padding: 10px;
    text-transform: uppercase;
    font-size: 20px;
    color: white;
    font-weight: bolder;
  }
  a:hover {
    color: ${({ theme }) => theme.additionalColor};
    transition: 0.4s ease-in-out;
  }

`;

const SocialMedia = () => {
  const links = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/',
    },
  ];

  return (
    <Wrapper>
      {links.map((item) => (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.name}
        </a>
      ))}
    </Wrapper>
  );
};

export default SocialMedia;
