import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ isLogged, children }) => {
  const location = useLocation();
  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default RequireAuth;
