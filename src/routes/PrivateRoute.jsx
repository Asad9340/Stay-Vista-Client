import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingSpinner />;
  if (user) return children;
  setTimeout(() => {
    return <Navigate to="/login" state={location.pathname} replace="true" />;
  }, 5000);
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
