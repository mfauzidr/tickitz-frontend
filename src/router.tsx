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

function Error() {
  return <div>Error</div>;
}

function NotFound() {
  return <div>Route Not Found</div>;
}

const routerWithChildren = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminIndex />,
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
      //   {
      //     path: "checkoutproduct",
      //     element: (
      //       <PrivateRoute to={"/login"}>
      //         <CheckoutProduct />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: 'orderdetails',
      //     element: (
      //       <PrivateRoute to={"/login"}>
      //         <OrderDetails />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: 'detailsproduct',
      //     element: (
      //       <PrivateRoute to={"/login"}>
      //         <DetailProduct />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: '/detailsproduct/:id',
      //     element: (
      //       <PrivateRoute to={"/login"}>
      //         <DetailProduct />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: '/ordersdetail/:id',
      //     element: (
      //       <PrivateRoute to={"/login"}>
      //         <OrderDetails />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: 'historyorder',
      //     element: (
      //       <PrivateRoute to={"/login"}>
      //         <HistoryOrder />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: 'profile',
      //     element: (
      //       <PrivateRoute to={"/login"}>
      //         <Profile />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: 'axios',
      //     element: <AxiosTry/>
      //   },
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
        path: "details",
        element: <MovieTicketBooking />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "*",
        element: <NotFound />,
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
  //   {
  //     path: '/forgot',
  //     element: <ForgotPass/>
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  //   {
  //     path: "/admin-toko-kopi",
  //     element: <AdminDashboard />,
  //     errorElement: <Error />,
  //     children: []
  //   }
]);

export default routerWithChildren;
