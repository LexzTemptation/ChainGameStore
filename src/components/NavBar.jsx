import { BrowserRouter, Link } from "react-router-dom"


function NavBar(){

    return(

            <header>

                <Link to={"/videoGames"}>Video Juegos</Link>
                &nbsp;
                <Link to={"/login"}>Login</Link>
            </header>
    )
}

export default NavBar