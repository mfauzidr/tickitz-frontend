import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../components/AdminHeader";
import AdminDashboard from "./AdminDashboard";

function AdminIndex() {
  const location = useLocation();

  return (
    <div className="container-fluid h-full w-full">
      <NavigationBar />
      {location.pathname === "/admin" ? <AdminDashboard /> : <Outlet />}
    </div>
  );
}

export default AdminIndex;
