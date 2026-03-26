const printResult = function(note){
    if(note >= 7){
        console.log('Approved with ' + note);
    } else {
        console.log('Reproved with ' + note);
    }
}

printResult(7.1);
printResult(6.9);
printResult('Warning!'); // Cuidado!
