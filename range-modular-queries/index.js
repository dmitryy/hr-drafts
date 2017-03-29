function countMods(arr, startIndex, endIndex, x, y) {
    var count = 0;
    arr.forEach((a, i) => {
        if (i >= startIndex && i <= endIndex && a % x == y) {
            count++;
        }
    });
    return count;
}

function main() {
    //var n_temp = readLine().split(' ');
    var n = 5;// parseInt(n_temp[0]);
    var q = 3;//parseInt(n_temp[1]);
    var a = '250 501 5000 5 4'.split(' ');
    a = a.map(Number);
    var b = ['0 4 5 0','0 4 10 0','0 4 3 2'];
    for(var a0 = 0; a0 < q; a0++){
        var left_temp = b[a0].split(' ');
        var left = parseInt(left_temp[0]);
        var right = parseInt(left_temp[1]);
        var x = parseInt(left_temp[2]);
        var y = parseInt(left_temp[3]);
        // your code goes here
        console.log(countMods(a, left, right, x, y));
    }
}

module.exports = main;