//If
/* En JavaScript y otros lenguajes de programación, la palabra clave if se usa para verificar si una 
condición es true y ejecutar el bloque de código. Para crear una condición if, necesitamos la palabra clave if, 
la condición va dentro de paréntesis y el bloque de código va dentro de llaves ({}). */
let num = 3;
if (num > 0) {
  console.log(`${num} es un número positivo`);
}
//  3 es un número positivo
let isRaining = true;
if (isRaining) {
  console.log("Recuerda llevar tu impermeable.");
} 
//If Else
if (num > 0) {
  console.log(`${num} es un número positivo`);
} else {
  console.log(`${num} es un número negativo`);
}
//  3 es un número positivo

num = -3;
if (num > 0) {
  console.log(`${num} es un número positivo`);
} else {
  console.log(`${num} es un número negativo`);
}
//  -3 es un número negativo
if (isRaining) {
  console.log("Necesitas un impermeable.");
} else {
  console.log("No hay necesidad de un impermeable.");
}
// Necesitas un impermeable.

isRaining = false;
if (isRaining) {
  console.log("Necesitas un impermeable.");
} else {
  console.log("No hay necesidad de un impermeable.");
}
// No hay necesidad de un impermeable.

//If Else if Else
let a = 0;
if (a > 0) {
  console.log(`${a} es un número positivo`);
} else if (a < 0) {
  console.log(`${a} es un número negativo`);
} else if (a == 0) {
  console.log(`${a} es cero`);
} else {
  console.log(`${a} no es un número`);
}

// if else if else
let weather = "sunny";
if (weather === "rainy") {
  console.log("Necesitas un impermeable.");
} else if (weather === "cloudy") {
  console.log("Puede que haga frío, necesitas una chaqueta.");
} else if (weather === "sunny") {
  console.log("Sal tranquilo.");
} else {
  console.log("No hay necesidad de un impermeable.");
}

//Switch

switch (weather) {
  case "rainy":
    console.log("Necesitas un impermeable.");
    break;
  case "cloudy":
    console.log("Puede que haga frío, necesitas una chaqueta.");
    break;
  case "sunny":
    console.log("Sal tranquilo.");
    break;
  default:
    console.log("No hay necesidad de un impermeable.");
}

// Más Ejemplos switch
let dayUserInput = prompt("¿Qué día es hoy?");
let day = dayUserInput.toLowerCase();

switch (day) {
  case "lunes":
    console.log("Hoy es Lunes");
    break;
  case "martes":
    console.log("Hoy es Martes");
    break;
  case "miércoles":
    console.log("Hoy es Miércoles");
    break;
  case "jueves":
    console.log("Hoy es Jueves");
    break;
  case "viernes":
    console.log("Hoy es Viernes");
    break;
  case "sábado":
    console.log("Hoy es Sábado");
    break;
  case "domingo":
    console.log("Hoy es Domingo");
    break;
  default:
    console.log("No es un día de semana.");
}

let num3 = prompt("Ingrese un número");
switch (true) {
  case num3 > 0:
    console.log("El número es positivo");
    break;
  case num3 == 0:
    console.log("El número es cero");
    break;
  case num3 < 0:
    console.log("El número es negativo");
    break;
  default:
    console.log("El valor ingresado no era un número");
}

//Operadores Ternarios
let isRaining2 = true;
isRaining2
  ? console.log("Necesitas un impermeable.")
  : console.log("No hay necesidad de un impermeable.");