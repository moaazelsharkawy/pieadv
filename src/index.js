import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Erorr404 from './pages/404';
import Online from './pages/online';
import Price from './pages/price';
import Service from './pages/service';
import Company from './pages/company';
import Product from './pages/product';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Erorr404/>,
  },

  {
    path: "/online",
    element: <Online/>,
    errorElement: <Erorr404/>,
  },
  {
    path: "/price",
    element: <Price/>,
    errorElement: <Erorr404/>,
  },
  {
    path: "/service",
    element: <Service/>,
    errorElement: <Erorr404/>,
  },
  {
    path: "/company",
    element: <Company/>,
    errorElement: <Erorr404/>,
  },
  {
    path: "/product",
    element: <Product/>,
    errorElement: <Erorr404/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
