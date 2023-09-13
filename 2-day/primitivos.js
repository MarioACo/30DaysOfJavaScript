/**
 * Los tipos de datos primitivos en JavaScript incluyen:

Números: enteros, flotantes
Cadenas: cualquier dato entre comillas simples, comillas dobles o comillas invertidas
Booleanos: valor verdadero o falso
Nulo - valor vacío o sin valor
Indefinido - una variable declarada sin un valor
Los tipos de datos que no son primitivos en JavaScript incluyen:

Objetos
Funciones
Matrices
Ahora, veamos qué significan exactamente los tipos de datos primitivos y no primitivos. Los tipos de datos primitivos son tipos de datos inmutables (no modificables). Una vez que se crea un tipo de datos primitivo, no podemos modificarlo.

 */
let word = "JavaScript";
/**
 * Si intentamos modificar la cadena almacenada en la variable word, JavaScript debería generar un error. Cualquier tipo de datos bajo comillas simples, comillas dobles o comillas invertidas son un tipo de datos de cadena.
 */
word[0] = "Y";

/**Esta expresión no cambia la cadena almacenada en la variable word. Entonces, podemos decir que las cadenas no son modificables o, en otras palabras, inmutables. Los tipos de datos primitivos se comparan por sus valores. Comparemos diferentes valores de datos. Vea el ejemplo a continuación: */
let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // Verdadero

let js = "JavaScript";
let py = "Python";

console.log(js == py); // Falso

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // Falso