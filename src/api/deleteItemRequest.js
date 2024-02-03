export default (id)=>{
    return fetch(`http://localhost:3001/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
}