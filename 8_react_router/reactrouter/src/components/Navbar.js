import "./Navbar.css"

import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link> {/*faz o redirecionamento trocando componentes*/}
            <Link to="/about">Sobre</Link>
        </nav>
    )
}

export default Navbar