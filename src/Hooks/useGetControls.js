import { useEffect, useState } from "react";

function useGetControls() {
  const [controls, setControls] = useState(null);

  const getControls = async () => {
    let res = await fetch(
      "http://localhost:8080/control/get?plataform=0&filter=0"
    );

    let data = await res.json();

    setControls(data);
  };

  useEffect(() => {
    getControls();
  }, []);

  return { controls };
}

export default useGetControls;
