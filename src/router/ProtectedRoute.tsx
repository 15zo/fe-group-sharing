import { Navigate, Outlet } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ProtectedRoute = () => {
  // const [accessToken] = useLocalStorage('accessToken', '');

  return true ? <Outlet /> : <Navigate to={'login'} replace />;
};

export default ProtectedRoute;
