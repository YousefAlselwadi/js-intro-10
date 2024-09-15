const myPromise = new Promise((resolve, rejcet) => {
    let mode = false;
    if(mode) resolve('SUCCESS');
    else rejcet('FALIURE');
});

console.log(myPromise);


// A method returning promise
function testAge(age) {
    return new Promise((resolve, rejcet) => {
        setTimeout(() => {
            if(age >= 16) resolve('Age is Allowed');
            else rejcet('Age is NOT allowed');
        }, 2000);
    });
}

testAge(16)
    .then((successMessage) => {console.log(successMessage)})
    .catch((errorMessage) => {console.log(errorMessage);});