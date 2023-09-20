const mes = prompt('Ingrese el mes para saber sus dias');
const año = prompt('Ingrese el año en el que se encuentra')
const days = (mes, año) => {
    switch (true){
        case mes.toLowerCase() === 'enero':
            alert(`El mes de ${mes} del año ${año} tiene ` + 31)
            break;
        case mes.toLowerCase() === 'febrero':
            parseInt(año) % 400 === 0 ? alert(`El mes de ${mes} del año ${año} tiene ` + 29) : parseInt(año) % 100 === 0 ? alert(`El mes de ${mes} del año ${año} tiene ` + 28) : parseInt(año) % 4 === 0 ? alert(`El mes de ${mes} del año ${año} tiene ` + 29) : alert(`El mes de ${mes} del año ${año} tiene ` + 28)
            break;
        case mes.toLowerCase() === 'marzo':
            alert(`El mes de ${mes} del año ${año} tiene ` + 31)
            break;
        case mes.toLowerCase() === 'abril' && parseInt(año) % 100 === 0:
            alert(`El mes de ${mes} del año ${año} tiene ` + 30)
            break;
        case mes.toLowerCase() === 'mayo':
            alert(`El mes de ${mes} del año ${año} tiene ` + 31)
            break;
        case mes.toLowerCase() === 'junio':
            alert(`El mes de ${mes} del año ${año} tiene ` + 30)
            break;
        case mes.toLowerCase() === 'julio':
            alert(`El mes de ${mes} del año ${año} tiene ` + 31)
            break;
        case mes.toLowerCase() === 'agosto':
            alert(`El mes de ${mes} del año ${año} tiene ` + 31)
            break;
        case mes.toLowerCase() === 'septiembre':
            alert(`El mes de ${mes} del año ${año} tiene ` + 30)
            break;
        case mes.toLowerCase() === 'octubre':
            alert(`El mes de ${mes} del año ${año} tiene ` + 31)
            break;
        case mes.toLowerCase() === 'noviembre':
            alert(`El mes de ${mes} del año ${año} tiene ` + 30)
            break;
        case mes.toLowerCase() === 'diciembre':
            alert(`El mes de ${mes} del año ${año} tiene ` + 31)
            break;
    }
}

days(mes,año)