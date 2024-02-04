export default (id,username,addingToCart)=>{
    if(addingToCart){
        username = username;
    }else{
        username=""
    }
    return fetch(`http://localhost:3001/update/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_queued: username,
        })
    })
    .then(response=>response.json())
}