import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./Error.style";

interface LocationStateType {
  message: string;
}

const Error = () => {
  const { state } = useLocation();
  const message = (state as LocationStateType)?.message;

  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Title>Oops!</S.Title>
      <S.BoldMessage>{message}</S.BoldMessage>
      <S.Message>잠시 후에 다시 시도해주세요.</S.Message>
      <S.Button onClick={() => navigate("/")}>
        <span>처음으로 돌아가기</span>
      </S.Button>
    </S.Wrapper>
  );
};

export default Error;
