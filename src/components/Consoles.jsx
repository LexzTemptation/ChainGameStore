import { useState } from "react"
import useGetConsoles from "../Hooks/useGetConsoles"
import ItemConsole from "./ItemConsole"
import DetailesVideoGame from "./DetailesVideoGame"


function Consoles() {

    const [accion, setAccion] = useState("products")
    const [dataDatail, setDataDetail] = useState()

    const { consoles } = useGetConsoles()

    return (
        <div>
            {
                accion === "products"
                    ? consoles ? consoles.map(console => <ItemConsole data={console} setAccion={setAccion} setDataDetail={setDataDetail} />) : null
                    : <DetailesVideoGame setAccion={setAccion} dataDatail={dataDatail} />
            }
        </div>
    )
}

export default Consoles