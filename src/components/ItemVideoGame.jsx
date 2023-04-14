import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./ItemVideoGame.css"


function ItemVideoGame({data, setAccion, setDataDetail}){

    let {genero} = data
    let {titulo, precio, descripcion} = data["producto"]
    let { foto } = data["listaFotos"][0]

    const handlerDetail = () => {

        setAccion("details")
        setDataDetail(data)

    }

    return(
        <div>
            {/* <div onClick={handlerDetail} className="container-game">

                <p>{titulo}</p>
                <p>{genero}</p>

            </div> */}
            <div onClick={handlerDetail}>
                <Row className='rows'>
                    <Col className='columns'>
                        <Card class="card" style={{ width: '18rem', height: '480px' }}>
                            <Card.Img class="card-img-top" variant="top" src={foto} alt="" />
                            <Card.Body class="card-body">
                                <Card.Title class="card-title">{titulo}</Card.Title>
                                <Card.Text class="card-text">
                                    {genero}
                                    <details>
                                        <summary>Ver más...</summary>
                                        {descripcion}
                                    </details>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">${precio}</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ItemVideoGame

