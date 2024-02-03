export default (arg) =>{
    return fetch(`http://localhost:3001/readPost`, 
    {
        method: "GET",
    })
    .then(response=>response.json())
}