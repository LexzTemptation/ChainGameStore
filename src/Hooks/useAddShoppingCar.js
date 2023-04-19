import { useEffect, useState } from "react";

function useAddShoppingCar( idCliente ) {
  const [car, setCar] = useState(null);

  console.log(idCliente);

  const getCar = async () => {
    let res = await fetch(
      "http://localhost:8080/shopping/getShoppingCars?idCliente= " + idCliente
    );

    console.log("http://localhost:8080/shopping/getShoppingCars?idCliente= " + idCliente);

    let data = await res.json();

    setCar(data);
  };

  useEffect(() => {
    getCar();
  }, []);


    return {car};
}

export default useAddShoppingCar;
