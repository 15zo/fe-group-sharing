import * as S from './Login.style';

import LogoLarge from '../../assets/svg/logo-lg.svg';

const Login = () => {
  return (
    <S.Wrapper>
      <h1>
        <img src={LogoLarge} alt="logo" />
      </h1>

      <S.ButtonWrapper>
        <S.Button
          href={'http://github.com/login/oauth/authorize?client_id=17e8286991a1ddce2954&scope=user'}
        >
          GitHub 계정으로 로그인
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Login;
