import { useEffect, useState } from "react";

function useGetHistory(idCliente) {
  const [history, setHistory] = useState(null);

  const getHistory = async () => {
    let res = await fetch(
      "http://localhost:8080/shopping/getBoughts?idCliente="+idCliente
    );

    let data = await res.json();

    setHistory(data);
  };

  useEffect(() => {
    getHistory();
  }, []);

  return { history };
}

export default useGetHistory;
