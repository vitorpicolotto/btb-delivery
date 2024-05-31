import { Link } from "react-router-dom";
import "./styles.css"


function Header(){
    return(
        <header className="header">
            <Link to="/" className="header-link"><h4>BTB Interplanetary Services</h4></Link>
            <nav className="header-navigate">
                <Link to="/cadastro" className="header-link">Cadastrar</Link>
                <Link to="/locais" className="header-link">Locais</Link>
            </nav>
        </header>
    )
}

export default Header;