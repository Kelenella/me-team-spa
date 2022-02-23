import { Navigate } from "react-router-dom";

const PublicRoute = ({ component: Component }) => {
  return <>{<Navigate to="/contacts" />}</>;
};

export default PublicRoute;
