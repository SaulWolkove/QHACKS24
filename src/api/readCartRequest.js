export default (arg) =>{
    return fetch(`http://localhost:3001/getCart?user_queue=${arg}`, 
    {
        method: "GET",
    })
    .then(response=>response.json())
}