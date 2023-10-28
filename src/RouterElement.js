import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inventories from "./Inventories";
import HomePage from "./HomePage";

const RouterElement = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/:id/inventories",
      element: <Inventories />,
    },
  ]);
  return <RouterProvider router={appRoutes} />;
};

export default RouterElement;
