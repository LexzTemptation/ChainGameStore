import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ItemCar({data, latitud, longitud, idCliente})
{

    let { titulo, precio, plataforma, garantia, condicion, idProducto } = data["producto"]
    let { foto } = data["producto"]["listaFotos"][0]

    let coords = {
        lat: 0,
        long: 0
    }, store = {
        lat: 21.1259214,
        long: -101.6832418
    }

    const calcularPrecio = (cantidadProducto) => {
        
        let theta = store.long - coords.long;
        let distance = 60 * 1.1515 * (180 / Math.PI) * Math.acos(Math.sin(store.lat * (Math.PI / 180)) * Math.sin(coords.lat * (Math.PI / 180)) + Math.cos(store.lat * (Math.PI / 180)) * Math.cos(coords.lat * (Math.PI / 180)) * Math.cos(theta * (Math.PI / 180)));
        let distancia = Math.round(distance * 1.609344, 4)
        let costoKM = 19.36;
        let costoEnvio = distancia * costoKM;
        let costoTot;
        let costoTemp;

        costoTemp = data.producto.precio * cantidadProducto;

        costoTot = costoEnvio + costoTemp

        return("Distancia de envío: " + distancia +
            " Km\nCosto del juego: $ " + costoTemp +
            "\nCosto del envío: $" + costoEnvio +
            "\nCosto Total: $ " + costoTot);
    }



    const handlerBuy = () => {

        let idCarrito = data["idCarrito"]
        let mes = new Date().getMonth()
        let dia = new Date().getDate()
        let año = new Date().getFullYear()

        let fecha = `${dia}/${mes}/${año}`

        let dat = {
            idCompra: 0,
            cantidad: parseInt(document.getElementById("cantidad").value),
            precioUnitario: data.producto.precio,
            latitud: latitud,
            longitud: longitud,
            idCarrito: idCarrito,
            fecha: fecha,
            idCliente: idCliente,
            producto: {
                idProducto: idProducto
            }
        }

        fetch("http://localhost:8080/shopping/addCompra", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dat)
        })
            .then(res => {
                console.log(res); swal({
                    title: "Compra Realizada",
                    text: calcularPrecio(dat.cantidad),
                    icon: "success"
                });
})

    }

    return(
        <div style={{padding: "5px"}}>
            <div class="col-md-4">
                <div class="card mb-3" style={{ maxWidth: '540px' }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={foto} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h9 class="card-title">{titulo}</h9>
                                <p class="card-text">{condicion}</p>
                                <p class="card-text">{plataforma}</p>
                                <p class="card-text">{garantia}</p>
                                <p class="card-text"><small class="text-muted">${precio}</small></p>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text >
                                        Cantidad
                                    </InputGroup.Text>
                                    <Form.Control
                                        id="cantidad"
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                                <Button onClick={handlerBuy}>Comprar ahora</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCar





