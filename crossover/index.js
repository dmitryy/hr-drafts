function avg(arr, day, size) {
    var count = 0;
    var total = 0;
    for (var i = day - 1; i >= 0 && size > 0; i--, size--) {
        count++;
        total += arr[i];
        //console.log(`total = ${total} count = ${count}`)
    }
    return parseFloat(parseFloat(total / count, 2).toFixed(2));
}

function stma(arr, day) {
    return avg(arr, day, 60);
}

function ltma(arr, day) {
    return avg(arr, day, 300);
}

function isCrossOver(arr, day) {
    if (day <= 300) return false;
    var smallYesterday = stma(arr, day - 1);
    var largeYesterday = ltma(arr, day - 1); 
    smallToday = stma(arr, day);
    largeToday = ltma(arr, day);
   
    console.log(`debug info: ${day} ${smallYesterday} ${largeYesterday} ${smallToday.toFixed(2)} ${largeToday.toFixed(2)}`)

    if (smallYesterday > largeYesterday && smallToday <= largeToday) return true;
    if (smallYesterday < largeYesterday && smallToday >= largeToday) return true;
    if (smallYesterday == largeYesterday && smallToday != largeToday) return true;

    return false;
}

function main() {
    var p = '4 5 6 4 5 7 3 4 5 6'.split(' ');
    p = p.map(Number);

    //console.log(stma(p, 5));
    //console.log(ltma(p, 5)); return;

    for (i = 0; i < p.length; i++) {
        var day = i + 1;
        if (isCrossOver(p, day)) {
            console.log(`${day} ${smallToday.toFixed(2)} ${largeToday.toFixed(2)}`);
        }
    }
}

module.exports = main;