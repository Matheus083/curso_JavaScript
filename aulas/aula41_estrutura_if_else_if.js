Number.prototype.enter = function(start, end) {
    return this >= start && this <= end
}

const printResult = function(note) {
    if (note.enter(9, 10)) {
        console.log('A');
    } else if(note.enter(7, 8.99)) {
        console.log('B');
    } else if(note.enter(4, 6.99)) {
        console.log('C');
    } else if(note.enter(0, 3.99)) {
        console.log('D');
    } else {
        console.log('Invalid note');
    }
}

printResult(10);
printResult(8.9);
printResult(6.55);
printResult(2.1);
printResult(-1);
