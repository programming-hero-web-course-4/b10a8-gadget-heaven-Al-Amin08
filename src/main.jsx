import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root.jsx";

import ErrorPage from "./Component/ErrorPage/ErrorPage.jsx";
import Home from "./Component/Home/Home.jsx";
import ProductDetails from "./Component/ProductDetails/ProductDetails.jsx";
import Dashboard from "./Component/Dashboard/Dashboard.jsx";
import Statistics from "./Component/Statistics/Statistics.jsx";
import Login from "./Component/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
