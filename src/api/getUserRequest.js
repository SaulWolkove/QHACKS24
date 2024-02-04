export default (arg) =>{
    return fetch(`http://localhost:3001/user`, 
    {
        method: "GET",
    })
    .then(response=>response.json())
}