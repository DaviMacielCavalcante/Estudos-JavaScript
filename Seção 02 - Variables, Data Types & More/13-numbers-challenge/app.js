const x = Math.floor(Math.random() * 100 + 1);

const y = Math.floor(Math.random() * (50 + 1));

const sumOutput = `${x} + ${y} = ${x + y}`;
const differenceOutput = `${x} - ${y} = ${x - y}`;
const productOutput = `${x} * ${y} = ${x * y}`;
const quotientOutput = `${x} / ${y} = ${x / y}`;
const rmOutput = `${x} % ${y} = ${x % y}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);