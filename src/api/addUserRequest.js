export default (user)=>{
    return fetch(`http://localhost:3001/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: user,
            accountType: "user",
        })
    })
    .then(response=>response.json())
}