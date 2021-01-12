//global.kotlin = require("./src/testjsktlibrary/lib/kotlin.js") //no es necesario. reemplazado en el propio modulo
//const test = require("./src/testjsktlibrary/testjsktlibrary.js")

const test = require("./src/testjsktlibrary/test.js")

console.log("FROM INDEX: "+JSON.stringify(test));

console.log("FROM INDEX: "+JSON.stringify(test.getMain().getRandomNumber()));

//const testInit = test();

//console.log("FROM INDEX: "+JSON.stringify(testInit));

module.exports = test