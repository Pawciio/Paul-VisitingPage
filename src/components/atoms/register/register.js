import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  p {
    font-size: 26px;
    font-weight: bolder;
  }
`;

const Line = styled.div`
  width: 100px;
  height: 5px;
  background: ${({ theme }) => theme.white};
  margin: 10px;
`;

const Register = () => (
  <Wrapper>
    <p>01</p>
    <Line />
    <p>04</p>
  </Wrapper>
);

export default Register;
