import styled, { css } from 'styled-components';

const Heading = styled.h2`
  font-size: 36px;
  text-transform: ${({ upper }) => (upper ? 'uppercase' : null)};
  color: ${({ theme, head }) => (head ? theme.textColorSecondary : null)};

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 23px;
      font-weight: lighter;
      text-align: center;
    `};
`;

export default Heading;
