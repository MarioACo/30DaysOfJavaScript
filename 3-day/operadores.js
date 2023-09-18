//Operadores de Asignación

firstName = "Asabeneh";
let country = "Finland";

//Operadores Aritméticos
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf); // 7,1,12,1.33,1, 64

const PI = 3.14;
let radius = 100; // longitud en metros

//Calculemos el área de un circulo
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); //  314 m

const gravity = 9.81; // en m/s2
let mass = 72; // en Kilogram

// Calculemos el peso de un objeto.
const weight = mass * gravity;
console.log(weight); // 706.32 N(Newton)

const boilingPoint = 100; // temperatura en °C, punto de ebullición del agua
const bodyTemp = 37; // temperatura corporal en °C

// Concatenación de string con números usando interpolación de strings
/*
 El punto de ebullición del agua es de 100 °C.
 La temperatura del cuerpo humano es de 37 oC.
 La gravedad de la tierra es de 9.81 m/s2.
 */
console.log(
  `El punto de ebullición del agua es de ${boilingPoint} °C.\nLa temperatura del cuerpo humano es de ${bodyTemp} °C.\nLa gravedad de la tierra es de ${gravity} m / s2.`
);

//Operadores de Comparación
console.log(3 > 2); // true, porque 3 es mayor que 2
console.log(3 >= 2); // true, porque 3 es mayor que 2
console.log(3 < 2); // false,  porque 3 es mayor que 2
console.log(2 < 3); // true, porque 2 es menor que 3
console.log(2 <= 3); // true, porque 2 es menor que 3
console.log(3 == 2); // false, porque 3 no es igual a 2
console.log(3 != 2); // true, porque 3 no es igual a 2
console.log(3 == "3"); // true, compara solamente el valor
console.log(3 === "3"); // false, compara tanto el valor como el tipo de dato
console.log(3 !== "3"); // true, compara tanto el valor como el tipo de dato
console.log(3 != 3); // false, compara solo valor
console.log(3 !== 3); // false, compara tanto el valor como el tipo de dato
console.log(0 == false); // true, equivalente
console.log(0 === false); // false, No exactamente igual
console.log(0 == ""); // true, equivalente
console.log(0 == " "); // true, equivalente
console.log(0 === ""); // false, No exactamente igual
console.log(1 == true); // true, equivalente
console.log(1 === true); // false, No exactamente igual
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, diferente
console.log(NaN === NaN); // false
console.log(typeof NaN); // tipo número

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

//Operadores Lógicos
// && ejemplo de operador ampersand

var check = 4 > 3 && 10 > 5; // true && true -> true
var check = 4 > 3 && 10 < 5; // true && false -> false
var check = 4 < 3 && 10 < 5; // false && false -> false

// || ejemplo de operador pipe

var check = 4 > 3 || 10 > 5; // true  || true -> true
var check = 4 > 3 || 10 < 5; // true  || false -> true
var check = 4 < 3 || 10 < 5; // false || false -> false

//! ejemplos de negación

check = 4 > 3; // true
check = !(4 > 3); //  false
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarried = !false; // true

//Operadores de Incremento
//Pre-incremento
let count = 0;
console.log(++count); // 1
console.log(count); // 1

//Post-incremento
let count2 = 0;
console.log(count2++); // 0
console.log(count2); // 1

//Operadores de Decremento
//Pre-decremento
let count3 = 0;
console.log(--count3); // -1
console.log(count3); // -1

//Post-decremento
count = 0;
console.log(count--); // 0
console.log(count); // -1

//Operadores Ternarios
let isRaining = true;
isRaining
  ? console.log("Necesitas un impermeable.")
  : console.log("No necesitas un impermeable.");
isRaining = false;

isRaining
  ? console.log("Necesitas un impermeable.")
  : console.log("No necesitas un impermeable.");

  let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
number = -5;

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);