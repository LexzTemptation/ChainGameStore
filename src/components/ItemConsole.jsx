
import "./ItemVideoGame.css"


function ItemConsole({ data, setAccion, setDataDetail }) {

    let {titulo, precio, publicador} = data["producto"]
    let {foto} = data["listaFotos"][0]

    const handlerDetail = () => {

        setAccion("details")
        setDataDetail(data)

    }

    return (
        <div onClick={handlerDetail} className="container-game">

            <p>{titulo}</p>
            <p>{precio}</p>
            <p>{publicador}</p>
            <img src={foto} width={50}/>

        </div>
    )
}

export default ItemConsole