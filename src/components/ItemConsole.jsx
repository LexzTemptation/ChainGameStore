import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./ItemVideoGame.css"


function ItemConsole({ data, setAccion, setDataDetail }) {

    let {idConsola, titulo, precio, descripcion} = data["producto"]
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
                    <p>{descripcion}</p>
                    <img src={foto} width={50} alt=""/>

                </div>
            </div> */}
            <Row md={4} lg={6} className="g-1">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col xs={{ order: 'first' }}>
                        <Card>
                            <Card.Img variant="top" src={foto} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        &nbsp;
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ItemConsole