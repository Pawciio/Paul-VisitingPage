import styled from 'styled-components';

const Circle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.textColorSecondary};
  margin-right: 20px;
`;

export default Circle;
