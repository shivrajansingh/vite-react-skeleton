import { Navigate } from 'react-router-dom';

const RoleGuard = ({ children, allowedRoles }) => {
  const userRole = "superuser"; //getCurrentUserRole();

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/no-access" />;
  }

  return children;
};

export default RoleGuard; 