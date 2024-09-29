import {Navigate, Outlet, BrowserRouter, Routes, Route} from "react-router-dom"
import { useContext } from "react"
import {AuthContext} from "../context/AuthContext"

import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro"
import Dashboard from "../pages/Dashboard"

const RotaPrivada = () => {
    const {isLogado} = useContext(AuthContext)

    return isLogado() ?  <Outlet /> : <Navigate to="/login" replace />
}

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<RotaPrivada />}>
                    <Route path="cadastro" element={<Cadastro />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}