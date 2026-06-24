import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../api/api';

export default function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}