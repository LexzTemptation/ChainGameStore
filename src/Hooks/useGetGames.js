

import { useEffect, useState } from "react";

function useGetGames(){

    const [games, setGames] = useState(null)


    const getGames = async () => {

        let res = await fetch("http://localhost:8080/videoJuego/get?plataform=0&filter=0")

        let data = await res.json()

        setGames(data)
    }

    useEffect(() => {

        getGames()

    }, [])

    return {games}
}

export default useGetGames