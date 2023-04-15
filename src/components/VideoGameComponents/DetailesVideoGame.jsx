import useAddShoppingCar from "../Hooks/useAddShoppingCar"
import Button from "react-bootstrap/Button"


function DetailesVideoGame({dataDatail, setAccion}){

    let {genero} = dataDatail
    let {titulo} = dataDatail["producto"]

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
        <div>
            
            <p onClick={handlerSetAccion}>Volver a los juegos</p>

            <p>{titulo}</p>
            <p>{genero}</p>

            <Button variant="success">Hacer Compra</Button>
            <button onClick={handlerBuy}>Hacer compra</button>
        </div>
    )
}

export default DetailesVideoGame