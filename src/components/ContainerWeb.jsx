import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import VideoGame from "./VideoGame"
import NavBar from "./NavBar"
import Login from "./Login"
import CreateAccount from "./CreateAccount"


function ContainerWeb() {

    return (
        <>
            <BrowserRouter>

                <NavBar/>

                <Routes>
                    <Route path="/videoGames" element={<VideoGame/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/createaccount" element={<CreateAccount />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default ContainerWeb