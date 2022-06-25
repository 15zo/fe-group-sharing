import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // const [accessToken] = useLocalStorage("accessToken", "");

  return true ? <Outlet /> : <Navigate to={'login'} replace />;
};

export default ProtectedRoute;
