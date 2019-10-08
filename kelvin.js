const kelvin = 293; //kelvin
const celcius = kelvin - 273; //celcius
let fahrenheit = celcius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);//fahrenheit
let newton = celcius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
console.log(`The temperature is ${newton} degrees newton`);
