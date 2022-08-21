const kelvin = 293 // This is the constant value of kelvin 
const celsius = kelvin - 273 // This is the constant value of celsius which is basically Kelvin substracted by 273

let fahrenheit = celsius *(9/5) + 32 // This is the constant value of Fahrenheit which is calculated by a mathmatical formula which is written above
Fahrenheit = Math.floor(fahrenheit);
console.log(`the temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`the temperature is ${newton} degrees Newton`);
