import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./ItemVideoGame.css"


function ItemVideoGame({data, setAccion, setDataDetail}){

    let {genero} = data
    let {titulo, precio, condicion} = data["producto"]
    let { foto } = data["producto"]["listaFotos"][0]

    const handlerDetail = () => {

        setAccion("details")
        setDataDetail(data)

    }

    return(
        <div>
            <div >
                <Row className='rows'>
                    <Col className='columns'>
                        <Card class="card" style={{ width: '18rem', height: '520px' }}>
                            <Card.Img class="card-img-top" variant="top" src={foto} alt="" />
                            <Card.Body class="card-body">
                                <Card.Title class="card-title">{titulo}</Card.Title>
                                <Card.Text class="card-text">
                                    {genero}
                                </Card.Text>
                                <Card.Subtitle>
                                    {condicion}
                                </Card.Subtitle>
                            </Card.Body>
                            <Card.Subtitle>
                                &nbsp; &nbsp;<Button variant="success" onClick={handlerDetail}>Comprar</Button>
                            </Card.Subtitle>
                            <br />
                            <Card.Footer>
                                <small className="Subtitle-muted">${precio}</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ItemVideoGame

