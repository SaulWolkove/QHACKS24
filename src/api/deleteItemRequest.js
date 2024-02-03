export default (item)=>{
    console.log(item._id)
    return fetch(`http://localhost:3001/${item._id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
}