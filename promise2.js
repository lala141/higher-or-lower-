// promise.js

const checklogin = () => new Promise((resolve, reject) => {

    let loggedIN = false;

    if (loggedIN) {
        resolve("Welcome, you are logged in");
    } else {
        reject("Sorry, you are not logged in");
    }

});

async function handleLogin() {

    try {
        const result = await checklogin();
        console.log(result);

    } catch (error) {
        console.log(error);
    }

}

handleLogin();