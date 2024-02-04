export default (arg) =>{
    return fetch(`http://localhost:3001/user/${arg}`, 
    {
        method: "GET",
        
    })
    .then(response=>response.json())
}