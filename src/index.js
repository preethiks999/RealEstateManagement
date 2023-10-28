import React  from "react";
import  ReactDOM   from "react-dom/client";
import { sampleData } from "./data"
import Project from "./Project";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Inventories from "./Inventories";

const App = ()=>{
    console.log(sampleData);
    sampleData.map((p)=>{
        console.log(p)
    })
  
  return (<div className="text-sm flex flex wrap">
    {
        sampleData.map((p)=>(            
            <Project data = {p}></Project>
        ))
    }


    
    
  </div>)
}

const RouterElement = () => {
    const appRoutes = createBrowserRouter([
        {
            path: "/",
            element: <App />,
          },
          {
            path: "/:id/inventories",
            element: <Inventories />,
          }
    ]);
    return <RouterProvider router={appRoutes} />;
  };



var root = document.getElementById('rootElement')
var rootElement = ReactDOM.createRoot(root)
rootElement.render(<RouterElement>

</RouterElement>)

