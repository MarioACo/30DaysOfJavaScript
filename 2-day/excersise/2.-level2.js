//Usando console.log() imprima la siguiente declaración:
oracion = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(oracion)

//Usando console.log() imprima la siguiente cita de la Madre Teresa:

oracion2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(oracion2)

//Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
num = '10'
console.log('10' === 10)
if(typeof(parseInt(num)) == typeof(10)){
    console.log(true)
}else{
    console.log(false)
}

//Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
if(Math.ceil(parseFloat('9.8')) === 10){
    console.log(true)
}else{
    console.log(false)
}

//Verifique si 'on' se encuentra tanto en Python como en la jerga

console.log('Python'.includes('on') && 'jargon'.includes('on'))

//Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.

console.log('I hope this course is not full of jargon.'.includes('jargon'))

//Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * (100 - 0) + 0));

//Genere un número aleatorio entre 50 y 100 inclusive.
console.log(Math.floor(Math.random() * (100 - 50)+ 50))

//Genere un número aleatorio entre 0 y 255 inclusive.
console.log(Math.floor(Math.random() * (255 - 0) + 0))

//Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
console.log('Javascript'.charAt(Math.floor(Math.random() * (9 - 0) + 0)))

//Use console.log() y caracteres de escape para imprimir el siguiente patrón.
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

//Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
oracion = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.substring(oracion.indexOf('porque'), oracion.lastIndexOf('porque') + 6))

//'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración.
amor = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.'
console.log(amor.match(/\amor+/g))

//Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.match(/\porque+/g))
//Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).
let sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replace(/[^\w\s]/gi, ''))

sentence = sentence.replace(/[^\w\s]/gi, '')
let count = {}

sentence.forEach(palabra => {
    if (count[palabra]) {
      count[palabra]++;
    } else {
      count[palabra] = 1;
    }
  });

let palabra = ''
let frecuenciaMaxima = 0
for(const palabra in sentence){
    if(count[palabra] > frecuenciaMaxima){
        palabra = sentence[palabra]
        frecuenciaMaxima = count[palabra]
    }
}

console.log(palabra)