import * as S from "./Login.style";

const Login = () => {
  return (
    <S.Wrapper>
      <h1>
        <img src={""} alt="logo" />
      </h1>

      <S.ButtonWrapper>
        <S.Button href={""}>GitHub 계정으로 로그인</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Login;
