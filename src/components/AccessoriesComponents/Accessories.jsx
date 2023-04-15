import { useState } from "react"
import useGetAccessories from "../../Hooks/useGetAccessories"
import ItemAccessories from "./ItemAccessories"
import DetailesVideoGame from "../DetailesVideoGame"

function Accessories() {

    const [accion, setAccion] = useState("products")
    const [dataDatail, setDataDetail] = useState()

    const { accessories } = useGetAccessories()

    return (
        <div>
            {
                accion === "products"
                    ? accessories ? accessories.map(accessory => <ItemAccessories data={accessory} setAccion={setAccion} setDataDetail={setDataDetail} />) : null
                    : <DetailesVideoGame setAccion={setAccion} dataDatail={dataDatail} />
            }
        </div>
    )
}

export default Accessories

