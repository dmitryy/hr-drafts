var utils = require('../utils');
var finput = './find-the-running-median/input.txt';
var foutput = './find-the-running-median/output.txt';

var input = [12,4,5,3,8,7, 1, 2] // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var input_i = 0;

function readLine() {
    return input[input_i++];
}

function swap(array, i1, i2) {
    var b = array[i1];
    array[i1] = array[i2];
    array[i2] = b;
}

function HeapSort(input) {
    //Build-Max-Heap
    let heapSize = input.length;
    for (let p = (heapSize - 1) / 2; p >= 0; p--)
        MaxHeapify(input, heapSize, p);

    for (let i = input.length - 1; i > 0; i--)
    {
        //Swap
        let temp = input[i];
        input[i] = input[0];
        input[0] = temp;

        heapSize--;
        MaxHeapify(input, heapSize, 0);
    }

    return input;
}

function MaxHeapify(input, heapSize, index)
{
    let left = (index + 1) * 2 - 1;
    let right = (index + 1) * 2;
    let largest = index;

    if (left < heapSize && input[left] > input[index])
        largest = left;
    else
        largest = index;

    if (right < heapSize && input[right] > input[largest])
        largest = right;

    if (largest != index)
    {
        let temp = input[index];
        input[index] = input[largest];
        input[largest] = temp;

        MaxHeapify(input, heapSize, largest);
    }
}

function maxHeapify(array, curIndex, heapSize) {
    // Left child in heap
    var left = 2*curIndex+1;
    // Right child in heap
    var right = 2*curIndex+2;
    var largest = curIndex;
    
    if (left < heapSize && array[left] > array[curIndex]) {
        largest = left;
    }
    
    if (right < heapSize && array[right] > array[largest]) {
        largest = right;
    }
    
    if (largest != curIndex){
        swap(array, curIndex, largest);
        maxHeapify(array, largest, heapSize);
    }
}
    
function buildMaxHeap(array, heapSize){
    // call maxHeapify on all internal nodes
    let lastElementIndex = array.length - 1;
    let parentIndex = parseInt((lastElementIndex - 1)/2);
    for(let i = parentIndex; i >= 0; i--){
        maxHeapify(array, i, heapSize);
    }
}
    
function heapSort(array){
    if(array == null || array.length < 2) 
        return;
        
    buildMaxHeap(array, array.length);
    let heapSize = array.length;
    for(let i = array.length - 1; i > 0; i--){
        swap(array, 0, i);
        heapSize = heapSize - 1;
        maxHeapify(array, 0, heapSize);
    }
}
 
function dump(arr) {
    console.log(arr.join(' '))
}

function print(res, arr) {
    var str = res.toString();
    if (str.indexOf('.') == -1) str += '.0';
    //console.log(str + ' - ' + arr.join(' '));
    //console.log(str);
    utils.writeOutput(foutput, str);
}

function saveOutput(output) {
    utils.clearOutput(foutput);
    utils.writeOutputArray(foutput, output);
}

function printProgress(progress) {
    if (progress % 1000 == 0) {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(progress);
    }
}

function putOutput(a) {
    var len = a.length;
    if (len % 2 == 0) {
        var e1 = a[len / 2];
        var e2 = a[len / 2 - 1];
        var res = (parseFloat(e1) + parseFloat(e2)) / 2;
        output.push(res)
    }
    else {
        output.push(a[(len - 1) / 2])
    }
}

var output = [];

function main() {
    var start = new Date();
    var array = utils.readInputArray(finput);
    array.splice(0, 1); // remove very first n
    array = array.map(Number);

    heapSort(array);
    putOutput(array);
    saveOutput(output);
    
    //console.log(array.length);

    // utils.readInput(finput, (line) => {
    //     //if (i > 10) return;
    //     if (i > n) return;
    //     if (i != 0) {
    //         //a[j++] = parseInt(line);
    //         j++;

    //         a.push(parseInt(line));
    //         //MaxHeapify(a, a.length, j);
    //         a.sort((a1, a2) => { return a1 > a2})

    //         var len = a.length;
        
    //         if (len % 2 == 0) {
    //             var e1 = a[len / 2];
    //             var e2 = a[len / 2 - 1];
    //             var res = (parseFloat(e1) + parseFloat(e2)) / 2;
    //             //print(res, a);
    //             output.push(res)
    //         }
    //         else {
    //             //print(a[(len - 1) / 2], a);
    //             output.push(a[(len - 1) / 2])
    //         }

    //         printProgress(j + '');
    //     }
    //     else {
    //         n = parseInt(line);
    //         console.log(`n = ${n}`);
    //     }
        
    //     i++;

    //     if (new Date() - start > 10000) i = n + 1;

    //     if (i > n) {
    //         var worktime = new Date() - start;
    //         console.log('.');
    //         console.log(`time: ${worktime}`);
    //         console.log('saving output...');
    //         saveOutput(output);
    //         // console.log(output[output.length-3])
    //         // console.log(output[output.length-2])
    //         // console.log(output[output.length-1])
    //         // console.log('length = ' + output.length)
    //         console.log('done');
    //         return;
    //     }
    // });

    // for(var a_i = 0; a_i < n; a_i++) {
    //    a[a_i] = parseInt(readLine());
    //    //var b = a.slice(0);
    //    //console.log('unsorted = ' + a.join(' '));
    //    heapSort(a);
    //    //dump(b)
    //    var len = a.length;
    //    //dump(sorted)
    //    if (len % 2 == 0) {
    //        var e1 = a[len / 2];
    //        var e2 = a[len / 2 - 1];
    //        var res = (parseFloat(e1) + parseFloat(e2)) / 2;
    //        print(res, a);
    //    }
    //    else {
    //        print(a[(len - 1) / 2], a);
    //    }
    // }
}

module.exports = main;