export default (arg) =>{
    return fetch(`http://localhost:3001/getItem?username=${arg}`, 
    {
        method: "GET",
    })
    .then(response=>response.json())
}