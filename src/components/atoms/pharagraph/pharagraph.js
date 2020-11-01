import styled, { css } from 'styled-components';

const Pharagraph = styled.p`
  font-size: 20px;
  margin: 5px;
  color: ${({ theme, white }) => (white ? theme.white : theme.textColorSecondary)};
  font-family: sans-serif;
  text-transform: ${({ upper }) => (upper ? 'uppercase' : null)};

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.additionalColor};
    `};
`;

export default Pharagraph;
