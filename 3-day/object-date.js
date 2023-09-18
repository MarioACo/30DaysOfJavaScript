//Crear un objeto de tiempo 
const now = new Date();
console.log(now); // Sáb 04 de enero de 2020 00:56:41 GMT+0200 (hora estándar de Europa del Este

//Obtener el año completo
console.log(now.getFullYear()); // 2020
//Obtener mes
console.log(now.getMonth()); // 0, porque el mes es enero, meses(0-11)
//Obtener fecha
console.log(now.getDate()); // 4, porque es el 4to dia del mes, día (1-31)
//Obtener día
console.log(now.getDay()); // 6, porque el día es sábado que es el día 7
// El domingo es 0, el lunes es 1 y el sábado es 6
// Obtener el día de la semana como un número (0-6)
//Obtener horas
console.log(now.getHours()); // 0, porque el tiempo es 00:56:41
//Obtener minutos
console.log(now.getMinutes()); // 56, porque el tiempo es 00:56:41
//Obtener segundos
console.log(now.getSeconds()); // 41, porque el tiempo es 00:56:41

//Obtener tiempo

//Usando getTime()
console.log(now.getTime()); // 1578092201341, este es el número de segundos que han pasado desde el 1ero de Enero de 1970 al 4 de Enero del 2020 00:56:41

//Usando Date.now()
const allSeconds = Date.now(); //
console.log(allSeconds); // 1578092201341, este es el número de segundos que han pasado desde el 1ero de Enero de 1970 al 4 de Enero del 2020 00:56:41

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds); // true

let hour = () => {
    const now = new Date();
const year = now.getFullYear(); // return años
const month = now.getMonth() + 1; // return meses(0 - 11)
const date = now.getDate(); // return días (1 - 31)
const hours = now.getHours(); // return horas (0 - 23)
const minutes = now.getMinutes(); // return minutos (0 -59)

return `${date}/${month}/${year} ${hours}:${minutes}` // 4/1/2020 0:56
}
console.log(hour())