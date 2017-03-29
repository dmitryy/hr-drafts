function isExp(exp) {
    var output = '';
    for (var i = 0; i < exp.length; i++) {
        var operation = exp[i];
        if (isRight(operation)) {
            var leftOperation = getLeftByRight(operation);
            if (output.length && output[output.length - 1] == leftOperation) {
                output = output.substr(0, output.length - 1);
            }
            else {
                return false;
            }
        }
        else {
            output = output + operation;
        }
    }
    return output.length === 0;
}

function isRight(r) {
    return r == '}' || r == ']' || r == ')';
}
    
function getLeftByRight(r) {
    switch (r) {
        case '}': return '{';
        case ']': return '[';
        case ')': return '(';
    }
}

function main() {
    console.log('work!');
}

module.exports = main;