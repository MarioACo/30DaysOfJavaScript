/**
 * Cadenas
Las cadenas son textos, que están debajo de single , double, back-tick comillas. Para declarar una cadena, necesitamos un nombre de variable, un operador de asignación, un valor entre comillas simples, comillas dobles o comillas invertidas. Veamos algunos ejemplos de cadenas:
*/
let espacio = " "; // una cadena de espacio vacío
let primerNombre = "Asabeneh";
let apellido = "Yetayeh";
let pais = "Finland";
let ciudad = "Helsinki";
let idioma = "JavaScript";
let trabajo = "teacher";
let cita = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotConBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;

/**
 * Concatenación de cadenas
La conexión de dos o más cadenas entre sí se llama concatenación. Usando las cadenas declaradas en la sección de Cadenas anterior:
 */
let nombreCompleto = primerNombre + espacio + apellido; // concatenación, fusionando dos cadenas juntas.
console.log(nombreCompleto);
//Podemos concatenar cadenas de diferentes formas.$

/**
 * Concatenar usando el operador de suma
Concatenar usando el operador de suma es una forma antigua. Esta forma de concatenar es tediosa y propensa a errores. Es bueno saber cómo concatenar de esta manera, pero recomiendo enfáticamente usar las cadenas de plantilla ES6 (explicadas más adelante).
 */

// Declarar diferentes variables de diferentes tipos de datos
let espaci2o = " ";
let primerNombre2 = "Asabeneh";
let apellido2 = "Yetayeh";
let pais2 = "Finland";
let ciudad2 = "Helsinki";
let idioma2 = "JavaScript";
let trabajo2 = "teacher";
let edad = 250;

let nombreCompleto2 = primerNombre + espacio + apellido;
let datosPersonaUno =
  nombreCompleto + ". Yo tengo " + edad + ". Vivo en" + pais; // Adición de cadena ES5

console.log(personInfoOne);

/**
 * Cadenas literales largas
Una cadena puede ser un solo carácter, un párrafo o una página. Si la longitud de la cadena es demasiado grande, no cabe en una línea. Podemos usar el carácter de barra invertida (\) al final de cada línea para indicar que la cadena continuará en la línea siguiente. Ejemplo:
 */

const parrafo =
  "Mi nombre es Asabeneh Yetayeh. Vivo en Finlandia, Helsinki.\
Soy profesora y me encanta enseñar. Enseño HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis y D3.js para cualquier persona interesada en aprender. \
A fines de 2019, estaba pensando en expandir mi enseñanza y llegar a \
a la audiencia global y comencé un desafío de Python del 20 de noviembre al 19 de diciembre.\
Fue una de las experiencias más gratificantes e inspiradoras.\
Ahora, estamos en 2020. Disfruto preparando el desafío 30DaysOfJavaScript y \
Espero que tú también estés disfrutando.";

console.log(parrafo);


/**
 * Secuencias de escape en cadenas
En JavaScript y otros lenguajes de programación \ seguido de algunos caracteres es una secuencia de escape. Veamos los caracteres de escape más comunes:
 */

/**
 * -\n: nueva linea

\t: Tabulador, significa 8 espacios
\\: barra invertida
\': Una frase (')
\": comillas dobles (")
 */

console.log(
    "Espero que todos estén disfrutando el desafío de 30 días de JavaScript.¿Y tú?"
  ); // salto de línea
  console.log("Días\temasEjercicios");
  console.log("Día 1\t3\t5");
  console.log("Día 2\t3\t5");
  console.log("Día 3\t3\t5");
  console.log("Día 4\t3\t5");
  console.log("Este es un símbolo de barra invertida (\\)"); // Para escribir una barra invertida
  console.log(
    'En todos los lenguajes de programación comienza con "¡Hola, mundo!"'
  );
  console.log(
    "En todos los lenguajes de programación comienza con '¡Hola, mundo!'"
  );
  console.log("El dicho 'Ver para creer' no es correcto en 2022");

  /**
   * Literales de plantilla
Para crear una plantilla de cadenas(cadenas de plantilla), usamos dos tildes de retroceso. Podemos inyectar datos como expresiones dentro de una cadena de plantilla. Para inyectar datos, encerramos la expresión con un corchete ({}) precedido por un signo $. Consulte la sintaxis a continuación.
   */
//Sintaxis
`Texto literal de cadena``Cadena de texto literal ${expresión}`;
//Ejemplo
console.log(`La suma de 2 y 3 es 5`); // escribiendo estáticamente los datos
let a = 2;
let b = 3;
console.log(`La suma de ${a} y ${b} es ${a + b}`); // inyectando los datos dinámicamente

//Ejemplo 2
let esp2aci2o = " ";
let primerNo2mbre = "Asabeneh";
let apel2lido = "Yetayeh";
let pai2s = "Finland";
let ciuda2d = "Helsinki";
let idio2ma = "JavaScript";
let tra2bajo = "profesora";
let edad2 = 250;
let nomb2reCompleto = primerNombre + espacio + apellido;

let personaInfoDos = `Soy ${nombreCompleto}. Tengo ${edad} años. Vivo en ${pais}.`; //ES6 - Método de interpolación de cadenas
let personaInfoTres = `Soy ${nombreCompleto}. Vivo en ${ciudad}, ${pais}. Soy una ${trabajo}. Enseño ${idioma}.`;
console.log(personaInfoDos);
console.log(personaInfoTres);


/**
 * Usando una plantilla de cadena o un método de interpolación de cadena, podemos agregar expresiones, que podrían ser un valor, o algunas operaciones (comparación, operaciones aritméticas, operación ternaria).
 */
let a2 = 2;
let b2 = 3;
console.log(`${a} es mayor que ${b}: ${a > b}`);

/**
 * Métodos de cadena
Todo en JavaScript es un objeto. Una cadena es un tipo de datos primitivo, lo que significa que no podemos modificarla una vez que se crea. El objeto de cadena tiene muchos métodos de cadena. Existen diferentes métodos de cadenas que nos pueden ayudar a trabajar con cadenas.

longitud: el método de cadena longitud devuelve el número de caracteres en una cadena incluido el espacio vacío.
Example:
 */
let js = "JavaScript";
console.log(js.length); // 10
let primerNombre22 = "Asabeneh";
console.log(primerNombre.length); // 8


/**
 * Accedamos a diferentes caracteres en la cadena 'JavaScript'.
 */
let string = "JavaScript";
let firstLetter = string[0];

console.log(firstLetter); // J

let secondLetter = string[1]; // a
let thirdLetter = string[2];
let lastLetter = string[9];

console.log(lastLetter); // t

let lastIndex = string.length - 1;

console.log(lastIndex); // 9
console.log(string[lastIndex]); // t

/**
 * toUpperCase(): este método cambia la cadena a letras mayúsculas.
 */

let stri2ng = "JavaScript";

console.log(string.toUpperCase()); // JAVASCRIPT

let firstName = "Asabeneh";

console.log(firstName.toUpperCase()); // ASABENEH

let country = "Finland";

console.log(country.toUpperCase()); // FINLAND

/**
 * toLowerCase(): este método cambia la cadena a letras minúsculas.
 */
let stri22ng = "JavasCript";

console.log(string.toLowerCase()); // javascript

let firstN2ame = "Asabeneh";

console.log(firstName.toLowerCase()); // asabeneh

let count2ry = "Finland";

console.log(country.toLowerCase()); // finland

//substr(): Se necesitan dos argumentos, el índice inicial y el número de caracteres para dividir.
let st222ring = "JavaScript";
console.log(string.substr(4, 6)); // Script

let coun222try = "Finland";
console.log(country.substr(3, 4)); // land

//substring(): Toma dos argumentos, el índice inicial y el índice final, pero no incluye el carácter en el índice final.
let st2ring = "JavaScript";

console.log(string.substring(0, 4)); // Java
console.log(string.substring(4, 10)); // Script
console.log(string.substring(4)); // Script

let co2ntry = "Finland";

console.log(country.substring(0, 3)); // Fin
console.log(country.substring(3, 7)); // land
console.log(country.substring(3)); // land


//split(): El método split divide una cadena en un lugar específico.
let stri3ng = "30 Days Of JavaScript";

console.log(string.split()); // Cambios en una matriz -> ["30 Days Of JavaScript"]
console.log(string.split(" ")); // Dividir a una matriz en el espacio -> ["30", "Days", "Of", "JavaScript"]

let firstN3ame = "Asabeneh";

console.log(firstName.split()); // Cambiar a una matriz - > ["Asabeneh"]
console.log(firstName.split("")); // Dividir en una matriz en cada letra ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(",")); // Dividir en cualquier matriz en coma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]


//trim(): Elimina el espacio final al principio o al final de una cadena.
let st3232ring = "   30 Days Of JavaScript   ";

console.log(string);
console.log(string.trim(" "));

let firs2323tName = " Asabeneh ";

console.log(firstName);
console.log(firstName.trim()); // todavía elimina espacios al principio y al final de la cadena

//includes(): Toma un argumento de subcadena y verifica si existe un argumento de subcadena en la cadena. includes() devuelve un valor booleano. Si existe una subcadena en una cadena, devuelve verdadero; de lo contrario, devuelve falso.

let stri2323ng = "30 Days Of JavaScript";

console.log(string.includes("Days")); // verdadero
console.log(string.includes("days")); // falso: ¡se distingue entre mayúsculas y minúsculas!
console.log(string.includes("Script")); // verdadero
console.log(string.includes("script")); // falso
console.log(string.includes("java")); // falso
console.log(string.includes("Java")); // verdadero

let co3232untry = "Finland";

console.log(country.includes("fin")); // falso
console.log(country.includes("Fin")); // verdadero
console.log(country.includes("land")); // verdadero
console.log(country.includes("Land")); // falso

//replace(): toma como parámetro la subcadena antigua y una nueva subcadena.

string.replace(oldsubstring, newsubstring);
let str424ing = "30 Days Of JavaScript";
console.log(string.replace("JavaScript", "Python")); // 30 Days Of Python

let cou22424ntry = "Finland";
console.log(country.replace("Fin", "Noman")); // Nomanland

//charAt(): Toma índice y devuelve el valor en ese índice
string.charAt(index);
let st6ring = "30 Days Of JavaScript";
console.log(string.charAt(0)); // 3

let lastIn5dex = string.length - 1;
console.log(string.charAt(lastIndex)); // t


//charCodeAt(): Toma el índice y devuelve el código char (número ASCII) del valor en ese índice
string.charCodeAt(index);
let swtring = "30 Days Of JavaScript";
console.log(string.charCodeAt(3)); // D ASCII numbero es 68

let laswtIndex = string.length - 1;
console.log(string.charCodeAt(lastIndex)); // t ASCII es 116

//indexOf(): Toma una subcadena y si la subcadena existe en una cadena, devuelve la primera posición de la subcadena; si no existe, devuelve -1
string.indexOf(substring);
let strqqing = "30 Days Of JavaScript";

console.log(string.indexOf("D")); // 3
console.log(string.indexOf("Days")); // 3
console.log(string.indexOf("days")); // -1
console.log(string.indexOf("a")); // 4
console.log(string.indexOf("JavaScript")); // 11
console.log(string.indexOf("Script")); //15
console.log(string.indexOf("script")); // -1

//lastIndexOf(): Toma una subcadena y si la subcadena existe en una cadena, devuelve la última posición de la subcadena; si no existe, devuelve -1
//syntax
string.lastIndexOf(substring);
let striang =
  "I love JavaScript. If you do not love JavaScript what else can you love.";

console.log(string.lastIndexOf("love")); // 67
console.log(string.lastIndexOf("you")); // 63
console.log(string.lastIndexOf("JavaScript")); // 38


//concat(): toma muchas subcadenas y las une.
string.concat(substring, substring, substring);
let str2ing = "30";
console.log(string.concat("Days", "Of", "JavaScript")); // 30DaysOfJavaScript

let count1ry = "Fin";
console.log(country.concat("land")); // Finland

//startsWith: toma una subcadena como argumento y verifica si la cadena comienza con esa subcadena especificada. Devuelve un valor booleano (verdadero o falso).
//syntax
string.startsWith(substring);
let straing = "Love is the best to in this world";

console.log(string.startsWith("Love")); // verdadero
console.log(string.startsWith("love")); // falso
console.log(string.startsWith("world")); // falso

let counatry = "Finland";

console.log(country.startsWith("Fin")); // verdadero
console.log(country.startsWith("fin")); // falso
console.log(country.startsWith("land")); //  falso

//endsWith: toma una subcadena como argumento y verifica si la cadena termina con esa subcadena especificada. Devuelve un valor booleano (verdadero o falso).
string.endsWith(substring);
let strincg = "Love is the most powerful feeling in the world";

console.log(string.endsWith("world")); // verdadero
console.log(string.endsWith("love")); // falso
console.log(string.endsWith("in the world")); // verdadero

let countrcy = "Finland";

console.log(country.endsWith("land")); // verdadero
console.log(country.endsWith("fin")); // falso
console.log(country.endsWith("Fin")); //  falso

//search: toma una subcadena como argumento y devuelve el índice de la primera coincidencia. El valor de búsqueda puede ser una cadena o un patrón de expresión regular
string.search(substring);
let stridng =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.search("love")); // 2
console.log(string.search(/javascript/gi)); // 7}

//match: toma una subcadena o un patrón de expresión regular como argumento y devuelve una matriz si hay una coincidencia; de lo contrario, devuelve un valor nulo. Veamos cómo se ve un patrón de expresión regular. Comienza con /signo y termina con /signo.
let strinag = "love";
let patternOne = /love/; // sin ninguna bandera
let patternTwo = /love/gi; // g-significa buscar en todo el texto, i - no distingue entre mayúsculas y minúsculas

//Coincidencia de sintaxis
// sintaxis
string.match(substring);

let strifng =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.match("love"));
//["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]

let pattern = /love/gi;
console.log(string.match(pattern)); // ["love", "love", "love"]

//Extraigamos números del texto usando una expresión regular. Esta no es la sección de expresiones regulares, ¡no se asuste! Cubriremos las expresiones regulares más adelante.

let txt =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d+/;

// d con carácter de escape significa que d no es una d normal sino que actúa como un dígito
// + significa uno o más dígitos,
// si hay g después de eso, significa global, busque en todas partes.

console.log(txt.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]

//repeat(): toma un número como argumento y devuelve la versión repetida de la cadena.
string.repeat(n);
let strinwg = "love";
console.log(string.repeat(10)); // lovelovelovelovelovelovelovelovelovelove

