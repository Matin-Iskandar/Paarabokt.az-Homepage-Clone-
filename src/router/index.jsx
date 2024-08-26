import { createBrowserRouter } from "react-router-dom";
import {routes} from "../constants/route"
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
export const router = createBrowserRouter([
  {
    path: routes.MAIN,
    element: <Layout />,
    children: [
      {
        index: true,
        element:<HomePage/>,
      },
    ],
  },
]);
