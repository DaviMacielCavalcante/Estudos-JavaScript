const getCelsius = (temperatura) =>{
   return (temperatura - 32) * (5 / 9);   
};

console.log(`The temperature is ${getCelsius(32)}`);

const minMax = (arrNumbers) => {
    min = Math.min(...arrNumbers);
    max = Math.max(...arrNumbers);
    const obj = {    
    min: min,
    max: max
    }
    return console.log(obj);
};

minMax([1,2,3,4,5,6]);

(function (length, width){
    let area = length * width;
    console.log(`The area of a rectangle with a length of ${length} and width of ${width} is ${area}`);
})(10, 5);