export default (arg) =>{
    return fetch(`http://localhost:3001/getItem`, 
    {
        method: "GET",
        body: JSON.stringify({
            username: arg
        })
    })
    .then(response=>response.json())
}