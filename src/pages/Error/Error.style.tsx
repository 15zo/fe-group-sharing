import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const BoldMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const Message = styled.p`
  color: #a0a3bd;
  font-size: bold;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  width: 340px;
  height: 64px;
  border-radius: 20px;
  font-size: 18px;
`;
