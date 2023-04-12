import { Link } from "react-router-dom"


function NavBar() {

    return (

        <header>

            <Link to={"/videoGames"}>Video Juegos</Link>
            &nbsp;
            <Link to={"/consoles"}>Consolas</Link>
            &nbsp;
            <Link to={"/controls"}>Controles</Link>
            &nbsp;
            <Link to={"/accesories"}>Accesorios</Link>
            &nbsp;
            <Link to={"/login"}>Login</Link>
        </header>
    )
}

export default NavBar