let word = "JavaScript";
/*Si intentamos modificar la cadena almacenada en la variable word, JavaScript debería generar un error.
 Cualquier tipo de datos bajo comillas simples, comillas dobles o comillas invertidas son un tipo de datos de cadena.*/
 word[0] = "Y";
 /*Esta expresión no cambia la cadena almacenada en la variable word. Entonces, podemos decir que las cadenas no son modificables o, en otras palabras,
  inmutables. Los tipos de datos primitivos se comparan por sus valores. Comparemos diferentes valores de datos. Vea el ejemplo a continuación:*/
  let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // Verdadero

let js = "JavaScript";
let py = "Python";

console.log(js == py); // Falso

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // Falso