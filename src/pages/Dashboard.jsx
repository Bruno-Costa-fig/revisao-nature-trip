import { Link } from "react-router-dom";

function Dashboard() {
    function logout() {
        localStorage.removeItem("token");
        window.location.reload();
    }

    function isLogado() {
        return localStorage.getItem("token");
    }

    return ( 
    <>
       <h1>Dashboard</h1> 

       {isLogado() && <button><Link to="/admin/cadastro">Cadastro</Link></button>}
       <button onClick={() => logout()}>logout</button>
       <button><Link to="Login">Login</Link></button>
    </>
);
}

export default Dashboard;