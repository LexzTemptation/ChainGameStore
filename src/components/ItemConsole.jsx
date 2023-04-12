import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ItemVideoGame.css"


function ItemConsole({ data, setAccion, setDataDetail }) {

    let {titulo, precio, publicador} = data["producto"]
    let {foto} = data["listaFotos"][0]

    const handlerDetail = () => {

        setAccion("details")
        setDataDetail(data)

    }

    return (
        <div>
                {/* <div>
                <div onClick={handlerDetail} className="container-game">

                    <p>{titulo}</p>
                    <p>{precio}</p>
                    <p>{publicador}</p>
                    <img src={foto} width={50} alt=""/>

                </div>
            </div> */}
            < Card >
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card >
        </div>
    )
}

export default ItemConsole