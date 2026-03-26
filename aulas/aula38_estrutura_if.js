function newNotice(note) {
    if(note >= 7) {
        console.log('Approved with ' + note);
    } else {
        console.log('Reproved with ' + note);
    }
}

newNotice(7.1);
newNotice(6.9);
