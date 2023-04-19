import { useState } from "react"
import useGetControls from "../../Hooks/useGetControls"
import ItemControls from "./ItemControls"
import DetailesControls from "../ControlComponents/DetailesControls"

function Controls({dataUser}) {

    const [accion, setAccion] = useState("products")
    const [dataDatail, setDataDetail] = useState()

    const { controls } = useGetControls()

    return (
        <div>
            {
                accion === "products" //
                    ? controls ? controls.map(control => <ItemControls data={control} setAccion={setAccion} setDataDetail={setDataDetail} />) : null
                    : <DetailesControls setAccion={setAccion} dataDatail={dataDatail} dataUser={dataUser}/>
            }
        </div>
    )
}

export default Controls

