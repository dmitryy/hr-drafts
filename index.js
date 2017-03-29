const taskName = './find-the-running-median';
var main = require(taskName);
var time = new Date();

main();

var worktime = new Date() - time;
console.log(`${worktime}ms`);

// var array = fs.readFileSync('input-expected.txt').toString().split("\n");

// var rd = readline.createInterface({
//     input: fs.createReadStream('input.txt')
// });

// var i = 0;

// rd.on('line', (line) => {
//     var actual = isExp(line) ? 'YES' : 'NO';
//     var expected = array[i]; 
//     if (actual.toLowerCase() != expected.trim().toLowerCase()) {
//         console.log(`Expected: ${expected}`)
//         console.log(`Actual: ${actual}`)
//         console.log(line);
//     }
//     i++;
// });