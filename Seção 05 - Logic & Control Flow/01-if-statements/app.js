if (true) {
    console.log('This is true');
};

if (false) {
    console.log('This is NOT true');
};

const x = 10;
const y = 5;

if (x >= y) {
    console.log(`${x} is greater than or equal to ${y}`);
};

if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else {
    console.log(`${x} is NOT equal to ${y}`);
};

// Shorthand
if (x >= y) console.log(`${x} is greater than or equal to ${y}`),
    console.log('This is true');
else console.log('This is false');