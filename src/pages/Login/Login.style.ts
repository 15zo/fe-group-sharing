import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 6px;
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
  width: 340px;
  height: 64px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  background-color: #14142b;
  border-radius: 20px;
`;
