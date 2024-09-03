
function getInfo( city, state ) {
    console.log(`Address is: ${city}, ${state}`);
}

const person = {
    fname: 'Mariia',
    lname: 'Bond'
};

getInfo.call(person, 'Chicago', 'IL'); // Address is: Chicago, IL
getInfo.apply(person, [ 'Chicago', 'IL' ]); // Address is: Chicago, IL