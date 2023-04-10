
import "./ItemVideoGame.css"


function ItemVideoGame({data, setAccion, setDataDetail}){

    let {genero} = data
    let {titulo} = data["producto"]

    const handlerDetail = () => {

        setAccion("details")
        setDataDetail(data)

    }

    return(
        <div onClick={handlerDetail} className="container-game">

            <p>{titulo}</p>
            <p>{genero}</p>

        </div>
    )
}

export default ItemVideoGame