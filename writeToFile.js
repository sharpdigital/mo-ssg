
var contentful = require('contentful')
var util = require('util')
var client = contentful.createClient({
        accessToken: 'fe6ec24a302371e4c96db485772b48d3eb496d92b1a396cc4ec71291b8bff19e',
        space: 'rdoaxptznw23'})


client.getContentType('3nXMTupVvOAUQ82IOO0iM2')
.then(function (contentType) {
  console.log(util.inspect(contentType, {depth: null}))
   })

var fs = require('fs');
var logFile = fs.createWriteStream('api/users/contentType.json', { flags: 'a' });

var logStdout = process.stdout;

console.log = function () {
  logFile.write(util.format.apply(null, arguments) + '\n');
  logStdout.write(util.format.apply(null, arguments) + '\n');
}
console.error = console.log;