
import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
const Router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      }
    ]
  }
])

export default Router
