import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Desktop";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminIndex from "./pages/AdminIndex";
import AdminCreateMovie from "./pages/AdminCreateMovie";
import MovieTicketBooking from "./pages/MovieDetails";
import AdminDashboard from "./pages/AdminDashboard";
import Order from "./pages/Order";
import AdminPage from "./pages/AdminPage";
import Payment from "./pages/Payment";
import Result from "./pages/Result";
import ProfileIndex from "./pages/ProfileIndex";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import PrivateRouteUser from "./components/PrivateRouteUser";

function Error() {
  return <div>Error</div>;
}

function NotFound() {
  return <div>Route Not Found</div>;
}

const routerWithChildren = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <PrivateRouteAdmin to={"/"}>
        <AdminIndex />
      </PrivateRouteAdmin>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "movie-create",
        element: <AdminCreateMovie />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "movie",
        element: <AdminPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "details/:id",
        element: <MovieTicketBooking />,
      },
      {
        path: "order/:id",
        element: (
          <PrivateRouteUser to={"/login"}>
            <Order />
          </PrivateRouteUser>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRouteUser to={"/login"}>
            <Payment />
          </PrivateRouteUser>
        ),
      },
      {
        path: "result/:id",
        element: (
          <PrivateRouteUser to={"/login"}>
            <Result />
          </PrivateRouteUser>
        ),
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <ProfileIndex />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routerWithChildren;
