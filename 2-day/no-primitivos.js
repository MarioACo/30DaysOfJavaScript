/**
 * Los tipos de datos no primitivos son modificables o mutables. Podemos modificar el valor de los tipos de datos no primitivos después de su creación. Veamos creando una matriz. Una matriz es una lista de valores de datos entre corchetes. Las matrices pueden contener tipos de datos iguales o diferentes. Los valores de matriz están referenciados por su índice. En el índice de matriz de JavaScript comienza en cero. Es decir, el primer elemento de una matriz se encuentra en el índice cero, el segundo elemento en el índice uno y el tercer elemento en el índice dos, etc.
 */
let nums = [1, 2, 3];
nums[0] = 10;

console.log(nums); // [10, 2, 3]
/**
 * Como puede ver, una matriz, que es un tipo de datos no primitivo, es mutable. Los tipos de datos no primitivos no se pueden comparar por valor. Incluso si dos tipos de datos no primitivos tienen las mismas propiedades y valores, no son estrictamente iguales.
 */
let nums = [1, 2, 3];
let numberos = [1, 2, 3];

console.log(nums == numbers); // Falso

let usuarioUno = {
  nombre: "Asabeneh",
  papel: "teaching",
  pais: "Finland",
};

let usuarioDos = {
  nombre: "Asabeneh",
  papel: "teaching",
  pais: "Finland",
};

console.log(usuarioUno == usuarioDos); // Falso

/**
 * Como regla general, no comparamos tipos de datos no primitivos. No compare matrices, funciones u objetos. Los valores no primitivos se conocen como tipos de referencia, porque se comparan por referencia en lugar de por valor. Dos objetos solo son estrictamente iguales si se refieren al mismo objeto subyacente.


 */
let nums = [1, 2, 3];
let numberos2 = nums;

console.log(nums == numbers); // Verdadero

let usuarioUno2 = {
  nombre: "Asabeneh",
  papel: "teaching",
  pais: "Finland",
};

let userTwo = userOne;

console.log(usuarioUno == usuarioDos); // Verdadero

/**
 * Si tiene dificultades comprendiendo la diferencia entre los tipos de datos primitivos y los tipos de datos no primitivos, no es el único. Cálmate y ve a la siguiente sección e intenta volver después de un tiempo. Ahora comencemos los tipos de datos por tipo de número.
 */
