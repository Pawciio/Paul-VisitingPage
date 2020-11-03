import styled, { css } from 'styled-components';

const Heading = styled.h2`
  font-size: 36px;
  /* margin: 0 0 20px 0; */
  color: ${({ theme, aboutUs }) => (aboutUs ? theme.textColorSecondary : null)};

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 24px;
      font-weight: lighter;
    `};
`;

export default Heading;
