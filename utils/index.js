var fs = require('fs');
var readline = require('readline');

function readInput(path, onLine) {
    var rd = readline.createInterface({
        input: fs.createReadStream(path)
    });

    rd.on('line', (line) => {
        onLine(line);
    });
} 

function readInputArray(path) {
    return fs.readFileSync(path, 'utf8').split('\n');
}

function clearOutput(path) {
    fs.truncateSync(path);
}

function writeOutput(path, line) {
    fs.appendFileSync(path, `${line}\n`);
}

function writeOutputArray(path, arr) {    
    var file = fs.createWriteStream(path);
    file.on('error', function(err) { /* error handling */ });
    arr.forEach(function(v) { file.write(v + '\n'); });
    file.end();
}

module.exports.readInput = readInput;

module.exports.readInputArray = readInputArray;

module.exports.writeOutput = writeOutput;

module.exports.writeOutputArray = writeOutputArray;

module.exports.clearOutput = clearOutput;