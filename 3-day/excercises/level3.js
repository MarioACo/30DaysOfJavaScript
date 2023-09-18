//Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1 > 10 ? date.getMonth() : `0${date.getMonth()}`
const day = date.getDay() > 10 ? date.getDay() : `0${date.getDay()}`
const hour = date.getHours() > 10 ? date.getHours() : `0${date.getHours()}`
const minutes = date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`

console.log(`${year}-${month}-${day} ${hour}:${minutes}`);