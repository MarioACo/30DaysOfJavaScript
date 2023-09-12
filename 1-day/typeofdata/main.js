
var nombre;
var execute = () => {
    console.log(nombre)
}

document.getElementById("undefined").onclick = execute;


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

document.getElementById("type").onclick = executeType;