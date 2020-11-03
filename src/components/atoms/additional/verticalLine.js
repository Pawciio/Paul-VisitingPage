import styled from 'styled-components';

const VerticalLine = styled.div`
  width: 3px;
  height: 90px;
  background: ${({ theme }) => theme.textColorSecondary};
  margin: 15px 32px 0 16px;
`;

export default VerticalLine;
