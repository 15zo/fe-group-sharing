import { useEffect } from "react";

import qs from "qs";
import { Navigate, useLocation } from "react-router-dom";

import useAxios from "../../hooks/useAxios";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Loading from "../Loading";

const LoginCallback = () => {
  const [idToken, setIdToken] = useLocalStorage("id", "");
  const [_, setAvatar_urlToken] = useLocalStorage("avatar_url", "");
  const [__, setNameToken] = useLocalStorage("name", "");
  const location = useLocation();

  const { code } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const [{ response, error }] = useAxios<any>({
    method: "get",
    url: "http://3.37.220.123:9081/githubOAuthLogin",
    config: {
      params: {
        code,
      },
    },
  });

  useEffect(() => {
    if (response) {
      setIdToken(response.id);
      setAvatar_urlToken(response.avatar_url);
      setNameToken(response.name);
    }
  }, [response]);

  if (error)
    return (
      <Navigate
        to={"/error"}
        state={{ message: " 로그인에 실패했습니다" }}
        replace
      />
    );
  else if (idToken) return <Navigate to={"/main"} replace />;
  else return <Loading />;
};

export default LoginCallback;
