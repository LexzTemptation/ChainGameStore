import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import VideoGame from "./VideoGame"
import NavBar from "./NavBar"


function ContainerWeb() {

    return (
        <>
            <BrowserRouter>

                <NavBar/>

                <Routes>
                    <Route path="/videoGames" element={<VideoGame/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default ContainerWeb