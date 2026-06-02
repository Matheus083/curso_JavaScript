function size(width, height) {
    const size = width * height;
    if (size > 20) {
        console.log(`Value above permitted: ${size}m2.`);
    } else {
        return size
    }
}

console.log(size(4, 3));
console.log(size(5, 5));
console.log(size(2));
