import useGetHistory from "../Hooks/useGetHistory";
import ItemHistory from "./ItemHistory";
import ItemVideoGame from "./ItemHistory"

function History({data}){

    let {idCliente} = data
    const {history} = useGetHistory(idCliente)

    console.log(history);

    return(
        <div>
            
            {
                history 
                ? history.map(his => <ItemHistory data={his}/>) 
                
                : null
            }
        </div>
    )
}

export default History
