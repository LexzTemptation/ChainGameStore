import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from "react-dom";
import './index.css';
import App from './components/App';
import Xd from "./components/Xd";
import CreateAccount from "./components/CreateAccount";
//import { App } from './routes/App';
//import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { CrearCuenta } from './CrearCuenta';
//import { Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Xd />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)









