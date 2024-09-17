const { Actions } = require("../utils/actions.js");

// function testValidLogin1() {
//     Cypress.visit2('www.techglobal-training.com')
//       .then(() => Cypress.login2('TechGlobal', 'Test1234'))
//       .then(() => Cypress.validateLoginMessage2('You are logged in'));
//   }
  

function test1() {
    Actions.visitUrl('https://api.tech-global-training.com/instructors')
      .then((res) => {console.log(res); return Actions.login('TechGlobal', 'Test1234')})
      .then((res) => {console.log(res); return Actions.validateTitle('My Awesome Title');})
      .then((res) => { console.log(res) })
      .catch((err) => { console.error(err) })
  }

  test1();

  async function test2() {
    try {
        const urlResponse = await Actions.visitUrl('https://api.tech-global-training.com/instructors')
        console.log(urlResponse);

        const loginResponse = await Actions.login('TechGlobal', 'Test1234')
        console.log(loginResponse);

        const titleResponse = await Actions.validateTitle('My Awesome Title')
        console.log(titleResponse);
    } 
    catch(err) {console.log(err);}
  }
  test2();