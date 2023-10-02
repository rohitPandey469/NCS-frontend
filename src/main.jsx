import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home";
import Team from "./Pages/Team/Team";
import Projects from "./Pages/Projects/Projects";
import Events from "./Pages/Events/Events";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element : <Home/>
  },
  {
    path :"team", 
    element :<Team />
  },
  {
    path:"projects", 
    element :<Projects />
  },
  {
    path:"events", 
    element :<Events />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
