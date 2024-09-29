import { Link } from "react-router-dom";

function Menu() {
    return ( <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin/cadastro">+ usuário</Link>
    </nav> );
}

export default Menu;