import React from 'react';
import styled from 'styled-components';

import InfoIcon from '../../../assets/infoIcon.png';

const StyledBurger = styled.button`
  display: none;

  @media (max-width: 1310px) {
    position: fixed;
    top: 5%;
    left: 1rem;
    width: 60px;
    height: 60px;
    background: ${({ theme }) => theme.sidebar};
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      outline: none;
    }
  }
`;

const HoverSidebarButton = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <img src={InfoIcon} alt="info" />
    </StyledBurger>
  );
};

export default HoverSidebarButton;
