function handleError(error) {
    // throw new Error('...');
    throw {
        name: error.name,
        message: error.message,
        date: new Date
    }
}

function test(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    }
    catch (error) {
        handleError(error)
    } finally {
        console.log('Finally');
    }
}

const obj = { name: 'John' };

test(obj); // Output: JOHN!!!
