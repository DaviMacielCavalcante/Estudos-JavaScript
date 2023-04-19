let i = 1;

while (i <= 20) {
    console.log(`Number ${i}`);
    i++;
};

// Loop over arrays
const arr = [10, 20, 30, 40, 50, 60];

while (i < arr.length) {
    console.log(arr[i]);
    i++;
};

// Nesting while loops
while (i <= 5) {
    console.log('Number' + i);

    let j = 1;

    while (j <= 5) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++
    };
    i++;
};

do {
    console.log('Number ' + i);
    i++;
} while (i <= 20);