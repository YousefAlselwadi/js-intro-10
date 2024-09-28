console.log('This is a JS file!');

// test/qa, dev, prod(no error)

// client, server

// window
// console.log('window', window); // window in cleint enviorment is am object
// console.log(typeof window); // object

// IN server side window is undefined

// ALert

// window.alert('Hi');
// const alertAns = window.alert('How are you?');
// console.log(alertAns);


// promt

// const ans = prompt('How are you today?');
// console.log(ans);


//confirm


// const confirmAns = confirm('Are you ready to enter?');
// console.log(confirmAns);

/* *innerHeight and innerWeight */

console.log(innerHeight);
console.log(innerWidth);


/* local storage
- set item()
- get item()
- remove item()
- clear()
*/

localStorage.setItem('username', 'tg20');

const username = localStorage.getItem('username');
console.log(username);

localStorage.removeItem('username');

localStorage.setItem('username2', 'tg2020');
localStorage.setItem('username3', 'tg202020');

localStorage.clear();
