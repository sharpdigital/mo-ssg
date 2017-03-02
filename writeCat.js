var contentful = require('contentful')
var util = require('util')
var client = contentful.createClient({
        accessToken: 'fe6ec24a302371e4c96db485772b48d3eb496d92b1a396cc4ec71291b8bff19e',
        //management_token: 'c6ad45049f961e8c1a63a7204b133dc5a6b18efd68f8a5ee87d259527a3f061a'
        space: 'rdoaxptznw23'})

client.getEntry('7hdlHKdI9qIi6ckkIuCwWm')  //cat
.then(function (entry) {
  console.log(util.inspect(entry, {depth: null}))
}) 


var fs = require('fs');   
var logFile = fs.createWriteStream('c:/project/my-static-site/api/posts/cat.json', { flags: 'a' });
var logStdout = process.stdout;

console.log = function () {
  logFile.write(util.format.apply(null, arguments) + '\n');
  logStdout.write(util.format.apply(null, arguments) + '\n');
}
console.error = console.log;