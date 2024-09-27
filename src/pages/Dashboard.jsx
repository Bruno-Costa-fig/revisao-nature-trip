import { Link } from "react-router-dom";

function Dashboard() {
    function logout() {
        localStorage.removeItem("token");
        window.location.reload();
    }

    function isLogado() {
        return localStorage.getItem("token");
    }

    function login() {
        window.location.href = "/login";
    }

    return ( 
    <>
       <h1>Dashboard</h1> 

       {isLogado() && <button><Link to="/admin/cadastro">Cadastro</Link></button>}
       <button onClick={() => logout()}>logout</button>
       <button onClick={() => login()}>Login</button>
    </>
);
}

export default Dashboard;