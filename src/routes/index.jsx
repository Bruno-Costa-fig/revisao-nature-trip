import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";

import Dashboard from '../pages/Dashboard';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';

const RotaPrivada = () => {
    const isLogado = localStorage.getItem("token")
  
    return isLogado ? <Outlet /> : <Navigate to="/login" replace />
  }

const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <Navigate to="/" />,
        element: <Dashboard />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <RotaPrivada />,
        children: [
            { path: 'cadastro', element: <Cadastro /> },
        ]
    },
]);

export default routes;