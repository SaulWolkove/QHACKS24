export default (item)=>{
    return fetch(`http://localhost:3001/createPost`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            product: item.product,
            group: item.group,
            quantity: item.quantity,
            expiration: item.expiration,
            user_queued: item.queued,
            username: item.username,
            size: sizeCategory,
            measurement: measurement
        })
    })
    .then(response=>response.json())
}