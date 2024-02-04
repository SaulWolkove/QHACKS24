<<<<<<< HEAD
export default (arg) => {
  return fetch(`http://localhost:3001/user/${arg}`, {
    method: "GET",
  }).then((response) => response.json());
};
=======
export default (arg) =>{
    return fetch(`http://localhost:3001/user/${arg}`, 
    {
        method: "GET",
        
    })
    .then(response=>response.json())
}
>>>>>>> 9246ed076cc69ba06699f0271db86c4b875062a2
