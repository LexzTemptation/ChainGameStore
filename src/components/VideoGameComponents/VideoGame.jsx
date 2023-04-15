import { useState } from "react"
import useGetGames from "../Hooks/useGetGames"
import ItemVideoGame from "./ItemVideoGame"
import DetailesVideoGame from "./DetailesVideoGame"


function VideoGame(){

    const [accion, setAccion] = useState("products")
    const [dataDatail, setDataDetail] = useState()

    const {games} = useGetGames()

    return (
        <div>
            {
                accion === "products" 
                ? games ? games.map(game => <ItemVideoGame data={game} setAccion={setAccion} setDataDetail={setDataDetail}/>) : null 
                : <DetailesVideoGame setAccion={setAccion} dataDatail={dataDatail}/>
            }
        </div>
    )
}

export default VideoGame