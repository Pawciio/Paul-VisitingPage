import styled, { css } from 'styled-components';

const Pharagraph = styled.p`
  font-size: 18px;
  margin: 5px;
  color: ${({ theme, white }) => (white ? theme.white : theme.textColorSecondary)};
  font-family: sans-serif;
  text-transform: ${({ upper }) => (upper ? 'uppercase' : null)};

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.textColor};
      font-weight: ${({ bold, light }) => (bold ? 'bold' : light ? 'lighter' : null)};
      font-size: ${({ big }) => (big ? '22px' : null)};
    `};
`;

export default Pharagraph;
