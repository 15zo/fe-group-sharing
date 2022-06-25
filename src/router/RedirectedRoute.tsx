import { Navigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

const RedirectRoute = () => {
  const [id] = useLocalStorage('id', '');

  return id ? <Navigate to={'main'} replace /> : <Navigate to={'login'} replace />;
};

export default RedirectRoute;
