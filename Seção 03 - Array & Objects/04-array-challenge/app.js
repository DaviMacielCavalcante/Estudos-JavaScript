const arr = [1, 2, 3, 4, 5];

arr.push(6);

arr.reverse();

arr.push(0);

console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr1.splice(4, 1);

console.log(arr1);

const arr3 = arr1.concat(arr2);

console.log(arr3);