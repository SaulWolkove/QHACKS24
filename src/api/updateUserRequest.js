export default (user)=>{
    return fetch(`http://localhost:3001/user/post/${user.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            accountType: "corp",
            corp: user.corp,
            location: user.location
        })
    })
    .then(response=>response.json())
}