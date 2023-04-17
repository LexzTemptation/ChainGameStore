import ItemCar from "./ItemCar"
import useAddShopingCar from "../../Hooks/useAddShoppingCar"

function Car({currentClient})
{

   let {idCliente} = currentClient
   let {car} = useAddShopingCar(idCliente) 
  

    return(
        <div>
            {
                car 
                ? car.map( carr => <ItemCar />)  
                : console.log("no") 
            }
        </div>
    )
}

export default Car
