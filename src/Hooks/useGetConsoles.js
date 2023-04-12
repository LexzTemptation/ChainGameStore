import { useEffect, useState } from "react";

function useGetConsoles() {
  const [consoles, setConsoles] = useState(null);

  const getConsoles = async () => {
    let res = await fetch(
      "http://localhost:8080/consola/get?plataform=0&filter=0"
    );

    let data = await res.json();

    setConsoles(data);
  };

  useEffect(() => {
    getConsoles();
  }, []);

  return { consoles };
}

export default useGetConsoles;
