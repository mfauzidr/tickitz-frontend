import { Navigate, To } from "react-router-dom";
import { useStoreSelector } from "../redux/hooks";

function PrivateRouteUser({ children, to }: { children: JSX.Element; to: To }) {
  const { token, user } = useStoreSelector((state) => state.auth);
  if (!token) return <Navigate to={to} replace />;
  if (user?.role === "admin") return <Navigate to={to} replace />;
  return children;
}

export default PrivateRouteUser;
