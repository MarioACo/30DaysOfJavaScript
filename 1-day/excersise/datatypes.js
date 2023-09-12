//Crea el archivo datatypes.js y utilizar el operador "typeof" de JavaScript para comprobar los diferentes tipos de datos. Comprueba el tipo de datos de cada variable
var datas = {
    string: 'Asabeneh',
    number: 5,
    boolean: true,
    nullable: null,
    undefined: undefined
}

var executeType = () => {
    for(var key in datas){
        console.log(typeof(datas[key]));
    }
}