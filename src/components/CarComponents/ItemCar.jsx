import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ItemCar({data, latitud, longitud, idCliente})
{

    let { titulo, precio, plataforma, garantia, condicion, idProducto } = data["producto"]
    let { foto } = data["producto"]["listaFotos"][0]

    const handlerBuy = () => {

        let idCarrito = data["idCarrito"]
        let mes = new Date().getMonth()
        let dia = new Date().getDate()
        let año = new Date().getFullYear()

        let fecha = `${dia}/${mes}/${año}`

        let dat = {
            idCompra: 0,
            cantidad: parseInt(document.getElementById("cantidad").value),
            precioUnitario: 4000,
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
        .then(res => console.log(res))

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
                                <input id='cantidad'type='text'/>
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





