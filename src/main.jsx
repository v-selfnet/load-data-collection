import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ContextApi from './components/ContextApi';
import Loader from './components/Loader';
import UseEffect from './components/UseEffect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'contextapi',
        element: <ContextApi></ContextApi>,
      },
      {
        path: 'loader',
        element: <Loader></Loader>,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: 'useeffect',
        element: <UseEffect></UseEffect>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
