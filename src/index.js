import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Header  from "./Header";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Inventories from "./Inventories";

const App = () => {  
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

const RouterElement = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/:id/inventories",
          element: <Inventories />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRoutes} />;
};

var root = document.getElementById("rootElement");
var rootElement = ReactDOM.createRoot(root);
rootElement.render(<RouterElement></RouterElement>);
