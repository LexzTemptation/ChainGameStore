import { useState } from "react"
import useGetControls from "../../Hooks/useGetControls"
import ItemControls from "./ItemControls"
import DetailesControls from "../ControlComponents/DetailesControls"

function Controls() {

    const [accion, setAccion] = useState("products")
    const [dataDatail, setDataDetail] = useState()

    const { controls } = useGetControls()

    return (
        <div>
            {
                accion === "products" //
                    ? controls ? controls.map(control => <ItemControls data={control} setAccion={setAccion} setDataDetail={setDataDetail} />) : null
                    : <DetailesControls setAccion={setAccion} dataDatail={dataDatail} />
            }
        </div>
    )
}

export default Controls

