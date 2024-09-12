const engineer = {
    solveProblem: function () {
        console.log('SOLVE PROBLEM');
    }
};

const tester = {
    test: function () {
        console.log('TEST');
    },
    __proto__: engineer
};

const sdet = {
    code: function () {
        console.log('CODE');
    },
    __proto__: tester
};

sdet.code();
sdet.test();
sdet.solveProblem();

console.log(sdet.__proto__); // { test: [Function: test] }
console.log(tester.__proto__); // { solveProblem: [Function: solveProblem] }
console.log(sdet.__proto__.__proto__); // { solveProblem: [Function: solveProblem] }
console.log(sdet.__proto__.__proto__.__proto__); // [Object: null prototype] {}