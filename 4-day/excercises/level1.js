//Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
/* const age = prompt('Ingrese su edad');

const drive = (age) => {
    if(age >= 18){
        alert('Tiene la edad suficiente para conducir')
    }else{
        alert(`Te faltan ${18 - parseInt(age)} años para conducir`)
    }
}

drive(age); */

//Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.
/* const myAge = parseInt(prompt('Ingresa tu edad'));
const yourAge = parseInt(prompt('Ingresa su edad'));

const result = (myAge, yourAge) => {
    if(myAge > yourAge){
        alert(`Soy ${myAge - yourAge} mayor que tu`)
    }else if(yourAge > myAge){
        alert(`Eres ${yourAge - myAge} mayor que yo`)
    }else{
        alert('Tenemos la misma edad')
    }
}

result(myAge, yourAge) */

//Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes 
/* const a  = parseInt(prompt('Ingrese un numero'))
const b = parseInt(prompt('Ingrese otro numero'))
 */
//Usando if else
/* const result = (a, b) => {
    if(a > b){
        alert('a es mayor que b')
    }else if(b > a){
        alert('b es mayor que a')
    }else{
        alert('a y b son iguales')
    }
}

result(a,b) */

//operador ternario.

/* const result = a > b ? alert(`${a} es mayor que ${b}`) : a < b ? alert(`${b} es mayor que ${a}`) : alert(`${a} y ${b} son iguales`)
 */
/* Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript? */

const parImpar = parseInt(prompt('Ingrese un numero'));

const result = (parImpar % 2) === 0 ? alert(`${parImpar} es un numero par`) : alert(`${parImpar} es un numero impar`)