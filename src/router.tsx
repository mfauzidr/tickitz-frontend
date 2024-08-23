import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Desktop";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminIndex from "./pages/AdminIndex";
import AdminMovie from "./pages/AdminMovie";
import MovieTicketBooking from "./pages/MovieDetails";

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
        path: "movie",
        element: <AdminMovie />,
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
      //   }
      //   ,
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
        path: "Details",
        element: <MovieTicketBooking />,
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
      //   }
      //   ,
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
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register/>,
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
