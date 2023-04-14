import { useEffect, useState } from "react";

function useGetAccessories() {
  const [accessories, setAccessories] = useState(null);

  const getAccessories = async () => {
    let res = await fetch(
      "http://localhost:8080/accesorio/get?plataform=0&filter=0"
    );

    let data = await res.json();

    setAccessories(data);
  };

  useEffect(() => {
    getAccessories();
  }, []);

  return { accessories };
}

export default useGetAccessories;
