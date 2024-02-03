//this is gonna load in the inventory of a store as well as any items that someone 
//has selected
import readItemRequest from "../api/readItemRequest";
import {useQuery} from "react-query";

export default function StoreInfoLoader({username}){
    const {isLoading, data: items} = useQuery(
        ['items', username],
        (username)=>readItemRequest(username)
    )

    return(
        !isLoading && (
            items.map((item)=>(
                <div key={item._id}>
                    {item.product}
                    {item.expiration}
                </div>
            ))
        )
    )        
    
}