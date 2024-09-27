import {BrowserRouter, Routes, Route, Outlet, Navigate} from "react-router-dom"

// pages
import Login from "../pages/Login"
import Dashboard from "../pages/Dahboard"
import App from "../App"

const RotaPrivada = () => {
    
    const token = localStorage.getItem("token")

    return token ? <Outlet /> : <Navigate to="/login" replace />
}

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RotaPrivada />} errorElement={<Navigate to="/login" replace />}>
                    <Route path="/" element={<App />}/>
                    <Route path="/dashboard" element={<Dashboard />}/>
                </Route>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}