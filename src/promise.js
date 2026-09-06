//make promise.js file in javascript
//promise.js
const checklogin = new Promise((resolve, reject) => {
    let loggedIN = true;
    if (loggedIN) {
        resolve("wellcome you are logged in");
    }
    else {
        reject("sorryyou are not logged in");
    }
})
checklogin.then((result) => {
    console.log(result);
});

checklogin.catch((error) => {
    console.log(error);
});




