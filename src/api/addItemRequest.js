export default (item)=>{
    return fetch(`http://localhost:3001/addItem`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            product: item.product,
            quantity: item.quantity,
            expiration: item.expiration,
            username: item.username
        })
    })
    .then(response=>response.json())
}