var utils = require('../utils');
var finput = './find-the-running-median/input.txt';
var foutput = './find-the-running-median/output.txt';

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

function MaxHeapify(input, heapSize, index) {
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
        output.push(res.toFixed(1));
    }
    else {
        output.push(parseFloat(a[(len - 1) / 2]).toFixed(1));
    }
}

//var input = [6,12,4,5,3,8,7];
var input = utils.readInputArray(finput);
var output = [];

function main() {
    var start = new Date();
    
    input.splice(0, 1); // remove very first n
    input = input.map(Number);

    for (var s = 1; s <= input.length; s++) {
        var array = input.slice(0, s);
        heapSort(array);
        putOutput(array);
        printProgress(s + '');
    }

    saveOutput(output);
}

module.exports = main;