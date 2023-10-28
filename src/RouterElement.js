import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inventories from "./Inventories";
import HomePage from "./HomePage";
import App from "./App";
import About from "./About";
import Contact from "./Contact";

const RouterElement = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/:id/inventories",
          element: <Inventories />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRoutes} />;
};

export default RouterElement;
