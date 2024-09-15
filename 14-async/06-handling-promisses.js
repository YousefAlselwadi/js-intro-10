const { Program } = require("../utils/Program");
/*
TEST CODE:

*/


// USING then() and catch() 
// function test1 () {
//     Program.gotoAmazon()
//     .then(() => Program.selectProduct())
//     .then(() => Program.addToCart())
//     .then(() => Program.checkout())
//     .catch((err) => console.log(err));
// }

// test1();

//USING async await
async function test2() {
    try {
    await Program.gotoAmazon();
    await Program.selectProduct();
    await Program.addToCart();
    await Program.checkout();
    } 
    catch(err) {
        console.log(err);
        console.log('DO SOMETHING ELSE');
    }
}
test2();


