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

  .changeNumberSecton{
    color: ${({ theme }) => theme.textColorSecondary};
  }

  .staticNumberSection{
    color: ${({ theme }) => theme.white};
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
    <p className='changeNumberSecton'>01</p>
    <Line />
    <p className='staticNumberSection'>04</p>
  </Wrapper>
);

export default Register;
