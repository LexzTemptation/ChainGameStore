import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import VideoGame from "./VideoGame"
import NavBar from "./NavBar"
import Login from "./Login"


function ContainerWeb() {

    return (
        <>
            <BrowserRouter>

                <NavBar/>

                <Routes>
                    <Route path="/videoGames" element={<VideoGame/>} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default ContainerWeb