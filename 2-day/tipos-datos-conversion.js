/**
 * Comprobación de tipos de datos
Para comprobar el tipo de datos de una determinada variable utilizamos el método typeof.

Ejemplo:
 */
// Diferentes tipos de datos javascript
// Declaremos diferentes tipos de datos

let firstName = 'Asabeneh' // cadena
let lastName = 'Yetayeh'   // cadena
let pais = 'Finlandia'    // cadena
let ciudad = 'Helsinki'    // cadena
let edad = 250             // numero, no es mi edad real, no te preocupes
let trabajo                    // indefinido, porque no se asignó un valor

console.log(typeof 'Asabeneh')  // cadena
console.log(typeof firstName)   // cadena
console.log(typeof 10)          // numbero
console.log(typeof 3.14)        // numbero
console.log(typeof true)        // booleano
console.log(typeof false)       // booleano
console.log(typeof NaN)         // numbero
console.log(typeof job)         // indefinido
console.log(typeof undefined)   // indefinido
console.log(typeof null)        // objeto


/**
 * Cambio del tipo de datos
Casting: Conversión de un tipo de datos a otro tipo de datos. Usamos parseInt(), parseFloat(), Number(), + sign, str() Cuando hacemos operaciones aritméticas, los números de cadena deben convertirse primero en enteros o flotantes; de lo contrario, devuelve un error.
Cadena a Int
Podemos convertir el número de cadena en un número. Cualquier número dentro de una comilla es un número de cadena. Un ejemplo de un número de cadena: '10', '5', etc. Podemos convertir cadena a número usando los siguientes métodos:

parseInt()
Número()
Signo más (+)
 */

let num = "10";
let numInt = parseInt(num);
console.log(numInt); // 10

let num2 = "10";
let numInt2 = Number(num2);

console.log(numInt); // 10

let num3 = "10";
let numInt3 = +num3;

console.log(numInt); // 10

/**
 * Cadena a Floatante
Podemos convertir un número flotante de cadena en un número flotante. Cualquier número flotante dentro de una comilla es un número flotante de cadena. Un ejemplo de un número flotante de cadena: '9.81', '3.14', '1.44', etc. Podemos convertir cadenas flotantes en números usando los siguientes métodos:

parseFloat()
Número()
Signo más (+)
*/

let num4 = "9.81";
let numFloat = parseFloat(num4);

console.log(numFloat); // 9.81

let num5 = "9.81";
let numFloat2 = Number(num5);

console.log(numFloat2); // 9.81

let num6 = "9.81";
let numFloat3 = +num6;

console.log(numFloat3); // 9.81

/**
 * Flotante a Int
Podemos convertir números flotantes a enteros. Usamos el siguiente método para convertir float a int:

parseInt()  
 */

let numa = 9.81;
let numInt21 = parseInt(numa);

console.log(numInt); // 9

