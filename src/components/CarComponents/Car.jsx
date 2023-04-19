import ItemCar from "./ItemCar"
import useAddShopingCar from "../../Hooks/useAddShoppingCar"
import { useState } from "react";

function Car({currentClient})
{

    const [latitud, setLatitud] = useState()
    const [longitud, setLongitud] = useState();

   let {idCliente} = currentClient
   let {car} = useAddShopingCar(idCliente) 


    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    function success(pos) {
        const crd = pos.coords;

        setLatitud(crd.latitude)
        setLongitud(crd.longitude)
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  

    return(
        <div>
            {
                car 
                ? car.map( carr => <ItemCar data={carr} longitud={longitud} latitud={latitud} idCliente={idCliente}/>)  
                : console.log("no") 
            }
        </div>
    )
}

export default Car
