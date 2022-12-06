import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/pages/Main';
import Gallery from "./components/pages/Gallery"
import ErrorPage from './components/functional/ErrorPage';
import Map from './components/pages/Map';
import TestDrive from './components/pages/TestDrive';


// ? Роутер для адресов страницы
// ? Router for page addresses
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />
  },
  {
    path: "/gallery",
    element: <Gallery />,
    errorElement: <ErrorPage />
  },
  {
    path: "/map",
    element: <Map />,
    errorElement: <ErrorPage />
  },
  {
    path: "/testdrive",
    element: <TestDrive />,
    errorElement: <ErrorPage />
  },
  {
    path: "/user",
    element: <TestDrive />,
    errorElement: <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);