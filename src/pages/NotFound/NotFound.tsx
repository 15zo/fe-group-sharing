import styled from 'styled-components';
import React from 'react';

import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>404</Title>
      <BoldMessage>페이지를 찾을 수 없습니다.</BoldMessage>
      <Message>경로를 다시 확인해주세요.</Message>
      <ButtonStyle onClick={() => navigate('/')}>
        <span>메인으로 가기</span>
      </ButtonStyle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #4e4b66;
`;

const BoldMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #4e4b66;
`;

const ButtonStyle = styled.button`
  background-color: orange;
  width: 340px;
  height: 64px;
  font-size: 18px;
  border-radius: 20px;
`;
const Message = styled.p`
  color: #a0a3bd;
  font-size: 18px;
  margin-bottom: 30px;
`;

export default NotFound;
