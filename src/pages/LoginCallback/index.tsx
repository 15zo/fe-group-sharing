import { useEffect } from 'react';

import qs from 'qs';
import { Navigate, useLocation } from 'react-router-dom';

import useAxios from '../../hooks/useAxios';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Loading from '../Loading';

interface TokenResponseType {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
}

const LoginCallback = () => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
  const [_, setRefreshToken] = useLocalStorage('refreshToken', '');
  const location = useLocation();

  const { code } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(code);

  const [{ response, error }] = useAxios<TokenResponseType>({
    method: 'get',
    url: 'http://3.37.220.123:9081/githubOAuthLogin',
    config: {
      params: {
        code,
      },
    },
  });

  useEffect(() => {
    if (response) {
      setAccessToken(response.accessToken);
      setRefreshToken(response.refreshToken);
    }
  }, [response]);

  if (error)
    return <Navigate to={'/error'} state={{ message: ' 로그인에 실패했습니다' }} replace />;
  else if (accessToken) return <Navigate to={'/issue-list'} replace />;
  else return <Loading />;
};

export default LoginCallback;
