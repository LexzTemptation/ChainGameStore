import { Link } from "react-router-dom"


function NavBar() {

    return (

        <header>

            <Link to={"/"}>Chain Store</Link>
            &nbsp;
            <Link to={"/videoGames"}>Video Juegos</Link>
            &nbsp;
            <Link to={"/consoles"}>Consolas</Link>
            &nbsp;
            <Link to={"/controls"}>Controles</Link>
            &nbsp;
            <Link to={"/accessories"}>Accesorios</Link>
            &nbsp;
            <Link to={"/historial"}>Historial</Link>
            &nbsp;
            <Link to={"/login"}>Login</Link>
        </header>
    )
}

export default NavBar