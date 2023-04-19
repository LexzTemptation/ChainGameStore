//import useAddShoppingCar from "../Hooks/useAddShoppingCar"
import "./DetailesVideoGame.css"
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button"
import { Col, Row } from "react-bootstrap";
import swal from 'sweetalert';



function DetailesVideoGame({ dataDatail, setAccion, dataUser }) {

  let dia = new Date().getDate()
  let mes = new Date().getMonth()
  let anio = new Date().getFullYear()
  let { genero } = dataDatail
  let { clasificacion } = dataDatail
  let { trailer } = dataDatail
  let { titulo, plataforma, descripcion, precio, garantia, publicador, lanzamiento, idProducto } = dataDatail["producto"]
  let foto1 = dataDatail["producto"]["listaFotos"]
  console.log(dataUser);

  const handlerSetAccion = () => {
    setAccion("products")
  }

  const handlerBuy = async () => {

    let dataBuy = {
      "idCarrito": 0,
      "fecha": `${dia}/${mes}/${anio}`,
      "idcliente": dataUser["idCliente"],
      "idProducto": idProducto,
      "cantidad": parseInt(document.getElementById("cantidad").value),
      "comprado": 0,
      "onCar": 0
    }

    let res = await fetch("http://localhost:8080/shopping/addShoppingCar", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(dataBuy)

    })

    console.log(res);
  }

  return (
    <div className="w">
      <p className="back" onClick={handlerSetAccion}>⇤Regresar</p>

      <div className="containerProduct">

        <Row className="rowProduct">
          <Col sm={5}>
            <Carousel variant="dark">
              {
                foto1.map(foto => {
                  return (
                    <Carousel.Item key={foto.idFoto}>
                      <img
                        className="img-fluid"
                        src={foto.foto}
                      />
                    </Carousel.Item>
                  )
                })
              }
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
                    <strong>Género: </strong><p>{genero}</p>
                  </span>
                  <span>
                    <strong>Clasificación: </strong><p>{clasificacion}</p>
                  </span>
                  <span>
                    <strong>Cantidad: </strong><br />
                  </span>
                  <span><input type="number" className="text-dark input " id="cantidad" /></span>
                </div>
                <div className="small"></div>

              </div>
              <h4 className="text-dark">Precio: </h4>
              <h4 className="text-dark"><small>$</small>{precio}</h4>
              <div className="d-grid gap-2">
                <Button variant="outline-primary" size="lg" onClick={() => { 
                  handlerBuy ()
                  swal("Articulo agregado al carrito","", "success")
                  
                  }}>Agregar al carrito</Button>
              </div>
            </div>

          </Col>
        </Row>



        <Row className="justify-content-md-center textDetails">
          <Col sm={8}>
            <div className="small"></div>
            <div className="descripcion">
              <h1 className="text-dark">Descripción</h1>
              <p>{descripcion}</p>
              <h5>Información adicional:</h5>
              <h6>Garantía valida por:</h6>
              <p>{garantia}</p>
              <h6>Publicado por:</h6>
              <p>{publicador}</p>
              <h6>Lanzamiento:</h6>
              <p>{lanzamiento}</p>
              <div className="small"></div><br></br>
              <div className="video">
                <iframe className="rep" width="560" height="315"
                  src={trailer}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
            </div>
          </Col>
        </Row>

      </div>
    </div>

  )
}

export default DetailesVideoGame