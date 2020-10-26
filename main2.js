const fs = require('fs')

let fileContent = fs.readFileSync('env').toString()
let regex = /.*=.*/gm
let found = fileContent.match(regex)
let configFile = process.argv[2] + ".json"

fs.open(configFile, 'w+', function (err, f) {
    if (err) {
        return console.error(err);
    }
})

fs.writeFile(configFile, JSON.stringify(found, null, '\t'), (err) => {
    if (err) throw err;
})