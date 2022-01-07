const validator = require('validator')

const getNotes = require('./notes')

console.log(getNotes())

console.log(validator.isEmail('kflint0068@gmail.com'));
console.log(validator.isEmail('kflint0068gmail.com'));
console.log(validator.isURL('http://test.com'));