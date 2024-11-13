import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import useRole from '../hooks/useRole';

const HostRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) return <LoadingSpinner />;
  if (role !== 'host') return <Navigate to="/dashboard" />;
  return children;
};

export default HostRoute;