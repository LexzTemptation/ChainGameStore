//import useAddShoppingCar from "../Hooks/useAddShoppingCar"
import "./DetailesAccessories.css"
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button"
import { Col, Row } from "react-bootstrap";



function DetailesAccessories({dataDatail, setAccion}){

    let {material} = dataDatail
    let {conectoresDeEntrada} = dataDatail
    let {titulo,plataforma,descripcion,precio,garantia,publicador,lanzamiento,condicion} = dataDatail["producto"]
    let foto1 = dataDatail["producto"]["listaFotos"][0].foto
    let foto2 = dataDatail["producto"]["listaFotos"][1].foto
    let foto3 = dataDatail["producto"]["listaFotos"][2].foto


    const handlerSetAccion = () => {
        setAccion("products")
    }

    const handlerBuy = async () => {
        
        let dataBuy = {
            "idCarrito": 0,
            "fecha": "25/03/2023",
            "idcliente": 2,
            "idProducto": 9
        }

        //let res = await fetch("http://localhost:8080/shopping/addShoppingCar")

        //console.log(res);  
    } 

    return (
        <div className="wrapper">
            <p onClick={handlerSetAccion}>Volver a los juegos</p>


          <div className="containerProduct">
            
                <Row className="rowProduct">
                      <Col sm={5}>
                      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="img-fluid"
          src={foto1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={foto2}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={foto3}
        />
      </Carousel.Item>
      </Carousel>
                      </Col>

                     
<Col sm={5}>
    <div className="title">
        <div className="details">
                <strong><p className="game">{titulo}</p></strong>
                <div className="subtitle">
                 <span>
                    <strong>Plataforma: </strong><p>{plataforma}</p>
                 </span>
                 <span>
                    <strong>Material: </strong><p>{material}</p>
                 </span>
                </div>
                <div className="small"></div>
                
        </div>
                <h4 className="text-dark">Precio: </h4>
                <h4 className="text-dark"><small>$</small>{precio}</h4>
                <div className="d-grid gap-2">
      <Button variant="outline-primary" size="lg" onClick={handlerBuy}>Agregar al carrito</Button>
    </div>
            
    </div>
             
             </Col>
             
          </Row>

          <Row className="justify-content-md-center textDetails">
        <Col sm={8}>
            <h1 className="text-dark">Descripción</h1>
                     <p>{descripcion}</p>
            <h4 className="text-dark">Información adicional:</h4>
            <h6>Garantía valida por:</h6>
            <p>{garantia}</p>
            <h6>Publicado por:</h6>
            <p>{publicador}</p>
            <h6>Lanzamiento:</h6>
            <p>{lanzamiento}</p>
            <h6>Condición:</h6>
            <p>{condicion}</p>
            <div className="small"></div>
                 </Col>
      </Row>
              
          </div>
          </div>
        
    )
}

export default DetailesAccessories