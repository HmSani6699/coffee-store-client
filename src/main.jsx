import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './component/UpdateCoffee.jsx';
import AddCofee from './component/AddCofee.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/updateCoffee',
    element:<UpdateCoffee></UpdateCoffee>
  },
  {
    path:'/addCoffee',
    element:<AddCofee></AddCofee>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
