//Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
let firstName = 'Mario';
let lastName = 'Arriaga';
let country = 'Mexico';
let city = 'CDMX';
let age = 24;
let isMarried = false;
let year = 2024

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

//Verifique si typeof '10' es igual a 10
console.log(typeof('10') == 10);

//Verifique si parseInt('9.8') es igual a 10
console.log(parseInt('9.8') == 10);

//Verifique cualquier valor booleano true o false.
//Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
console.log(1 == '1')
console.log('hola'.length === 4)
console.log(3 < 5);

//Escriba tres declaraciones de JavaScript que proporcionen un valor falso.

console.log(1 === '1');
console.log(!true);
console.log(4 >= 5)
console.log('=======================================')


//Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
/*
4 > 3 true
4 >= 3 true
4 < 3 false
4 <= 3 false
4 == 4 true 
4 === 4 true 
4 != 4 false
4 !== 4 false
4 != '4' false
4 == '4' true
4 === '4' false
Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
*/ 

console.log(4 > 3 )
console.log(4 >= 3 )
console.log(4 < 3 )
console.log(4 <= 3 )
console.log(4 == 4  )
console.log(4 === 4  )
console.log(4 != 4 )
console.log(4 !== 4 )
console.log(4 != '4' )
console.log(4 == '4' )
console.log(4 === '4' )
console.log('Python'.length !== 'jargon'.length)
console.log('==================================');
//Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

/*
4 > 3 && 10 < 12 true
4 > 3 && 10 > 12 false
4 > 3 || 10 < 12 true
4 > 3 || 10 > 12 true
!(4 > 3) false
!(4 < 3) true
!(false) true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 === '4') true
No hay 'on' tanto en dragon como en python false*/

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!('dragon'.includes('on') == 'python'.includes('on')))

//Utilice el objeto Date para realizar las siguientes actividades
let date = new Date();

//¿Qué año es hoy?
console.log(date.getFullYear())

//¿Qué mes es hoy con un número?
console.log(date.getMonth() + 1)

//¿Qué fecha es hoy?
console.log(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear())

//¿Qué día es hoy con un número?
console.log(date.getDay())
//¿Cuál es la hora actual?
console.log(date.getHours());
//¿Cuántos minutos hay actualmente?
console.log(date.getMinutes());
//Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
console.log(date.getTime());