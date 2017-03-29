var n = 3;
var a = 'au'.split(''); // 'aeiou'.split('');
var b = 'bc'.split(''); // 'bcdfghjklmnpqrstvwxz'.split('');

function next(arr1, arr2) {
    let arr = [];
    arr1.forEach((a) => {
        if (arr2.length) {
            arr2.forEach((b) => {
                arr.push(`${a}${b}`);
            });
        } else {
            arr.push(`${a}`);
        }
    });
    return arr;
}

function dump(arr) {
    console.log(arr.join(' ')); // \n
}

function main() {
    let arr1 = [];
    let arr2 = [];
    let output = [];
    for (var i = 0; i < n; i++) {
        let temp1 = next(a, arr1);
        let temp2 = next(b, arr2);
        output = output.concat(temp1);
        output = output.concat(temp2);
        arr1 = temp2;
        arr2 = temp1;
    }
    dump(output);
}

module.exports = main;