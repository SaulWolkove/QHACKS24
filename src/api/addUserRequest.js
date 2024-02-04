import getAccount from "./getUserRequest";

export default (user) => {
    // Call the getAccount function, which returns a Promise
    getAccount(user)
        .then((copy) => {
            console.log(copy);
            console.log(user);

            // Check if copy is truthy
            if (copy.length > 0) {
                // If copy is truthy, return or perform any other logic
                console.log("User data already exists:", copy);
            } else {
                // If copy is falsy, perform the POST request
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
                .then(response => response.json())
                .then((postData) => {
                    console.log("New user data:", postData);
                    // You can perform further logic with the postData if needed
                });
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            // Handle errors if any
        });
};
