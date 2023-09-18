//Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
/* const base = prompt('ingresa la base de tu triangulo');
const altura = prompt('ingresa la altura de tu triangulo');
const area = (b, a) => {
    return 0.5 * b * a
}
console.log(area(base,altura)); */

//Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
/* const ladoa = prompt('ingrese el primer lado de su triangulo')
const ladob = prompt('ingrese el segundo lado de su triangulo')
const ladoc = prompt('ingrese el tercer lado de su triangulo')

const perimetro = () => {
    return parseInt(ladoa) + parseInt(ladob) + parseInt(ladoc);
}

alert(perimetro(ladoa, ladob, ladoc)) */

//Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
/* const largo = prompt('ingrese el largo del rectangulo');
const ancho = prompt('ingrese el ancho del rectangulo');

const area = (largo, ancho) => {
    return largo * ancho
}

const perimetro = (largo, ancho) => {
    return 2 * (largo * ancho)
}

console.log(`El area de su rectangulo es ${area(largo, ancho)} y el perimetro es  ${perimetro(largo, ancho)}`); */
//Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
/* const radio = prompt('proporcione el radio del circulo');

const area = (radio) => {
    return 3.14 * (radio**2)
}

const circunferencia = (radio) => {
    return (2 * 3.14) * radio
}

alert(`el area del circulo es  ${area(radio)} y la circunferencia del circulo es ${circunferencia(radio)}`) */

//Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
/* const horas = prompt('Ingrese las horas de trabajo');
const tarifa = prompt('Ingresa la tarifa por horas');

const salario = (horas, tarifa) => {
    return 7 * parseInt((horas * tarifa))
}

alert(salario(horas,tarifa)) */

//Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.

/* const firstName = 'Mario'
const lastName = 'Arriaga'

const oracion = firstName.length > lastName.length ? `Tu Nombre ${firstName} es mas grande que tu apellido ${lastName}` : `Tu Apellido ${lastName} es mas grande que tu nombre ${firstName}`

 */
/* alert (oracion) */

//Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
/* const longName = firstName.length > 7 ? 'Tu nombre es largo' : 'Tu nombre es corto' 
alert(longName) */

//Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge
/* const myAge = 24;
const yourAge = 10;

const difAge = (myAge, yourAge) => {
    let dif = myAge - yourAge;
    return dif > 0 ? `Soy ${dif} años mayor que tu` : `Eres ${dif} años mayor que yo`
}

alert(difAge(myAge, yourAge)) */

//Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.

/* const birth = parseInt(prompt('Introduzca su año de nacimiento'));

const calcAge = (birth) => {
    var year = new Date();
    var age = parseInt(year.getFullYear()) - birth 
    return age >= 18 ? `Tienes ${age}. Tienes la edad suficiente para conducir` : `Tienes ${age}. Podras conducir despues de ${18 - age} años`
}

alert(calcAge(birth))

 */

//Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años
/* const ageLife = parseInt(prompt('Ingrese sus años de vida'))

const secLife = (ageLife) => {
    const secDay = 86400;
    var secYear = 365 * secDay;
    return ageLife * secYear
}

alert(secLife(ageLife)) */

//Cree un formato de hora legible por humanos usando el objeto Date.

//YYYY-MM-DD HH:mm
const date = new Date();
const dateG = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
alert(dateG)

//DD-MM-YYYY HH:mm

const dateDdMmYyyy = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
alert(dateDdMmYyyy)

//DD/MM/YYYY HH:mm
const dateDdMmYyyyNew = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
alert(dateDdMmYyyyNew)
