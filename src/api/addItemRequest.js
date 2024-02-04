export default (item)=>{
    return fetch(`http://localhost:3001/addItem`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            product: item.product,
            group: item.group,
            quantity: item.quantity,
            expiration: item.expiration,
            measurement: item.measurement,
            user_queued: item.queued,
            username: item.username
        })
    })
    .then(response=>response.json())
}