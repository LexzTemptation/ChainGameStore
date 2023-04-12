import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import VideoGame from "./VideoGame"
import NavBar from "./NavBar"
import Login from "./Login"
import CreateAccount from "./CreateAccount"
import Controls from "./Controls"
import Consoles from "./Consoles"
import Accessories from "./Accessories"



function ContainerWeb() {

    return (
        <>
            <BrowserRouter>

                <NavBar/>

                <Routes>
                    <Route path="/videoGames" element={<VideoGame/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/createaccount" element={<CreateAccount />} />
                    <Route path="/accesories" element={<Accessories />} />
                    <Route path="/controls" element={<Controls />} />
                    <Route path="/consoles" element={<Consoles />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default ContainerWeb