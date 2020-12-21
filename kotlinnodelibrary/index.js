global.kotlin = require("./src/testjsktlibrary/lib/kotlin.js")
const test = require("./src/testjsktlibrary/testjsktlibrary.js")

console.log("FROM INDEX: "+JSON.stringify(test));

console.log("FROM INDEX: "+JSON.stringify(test.getMain().getRandomNumber()));

//const testInit = test();

//console.log("FROM INDEX: "+JSON.stringify(testInit));

module.exports = test