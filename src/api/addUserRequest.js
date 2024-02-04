export default (user)=>{
    return fetch(`http://localhost:3001/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: user.email,
            accountType: user.accountType,
            name: user.name
        })
    })
    .then(response=>response.json())
}