import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import DashBoard, { dashboardLoader } from "./pages/DashBoard";
import { loginAction } from "./actions/loginAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <Home />, index: true },
      { path: "login", element: <Login />, action: loginAction },
      { path: "dashboard", element: <DashBoard />, loader: dashboardLoader },
    ],
  },
]);


const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
