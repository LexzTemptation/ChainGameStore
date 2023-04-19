import { BrowserRouter, Route, Routes } from "react-router-dom"
/* import { BrowserRouter, Link, Route, Routes } from "react-router-dom" */
import VideoGame from "./VideoGameComponents/VideoGame"
import NavBar from "./NavBar"
import Login from "./Login"
import CreateAccount from "./CreateAccount"
import Controls from "./ControlComponents/Controls"
import Consoles from "./ConsolesComponents/Consoles"
import Car from "./CarComponents/Car"
import Accessories from "./AccessoriesComponents/Accessories"
import { useState } from "react"

function ContainerWeb() {

    const [currentClient, setCurrentClient] = useState()

    return (
        <>
            <BrowserRouter>

                <NavBar/>

                <Routes>
                    <Route path="/"/>
                    <Route path="/videoGames" element={<VideoGame dataUser={currentClient}/>} />
                    <Route path="/login" element={<Login setCurrentClient={setCurrentClient}/>} />
                    <Route path="/createaccount" element={<CreateAccount />} />
                    <Route path="/accessories" element={<Accessories />} />
                    <Route path="/controls" element={<Controls />} />
                    <Route path="/consoles" element={<Consoles />} />
                    <Route path="/car" element={<Car currentClient={currentClient}/>}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default ContainerWeb