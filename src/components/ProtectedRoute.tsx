import { Navigate } from 'react-router';
import { useAppSelector } from '../hooks/storeHooks';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn } = useAppSelector(store => store.user);

  if (!isLoggedIn) return <Navigate to='signup' replace={true} />;

  return children;
};

export default ProtectedRoute;
