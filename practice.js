//Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.ZZZ

function contrasenaValida(contrasena){
    if(contrasena == "2Fj(jjbFsuj" || contrasena == "eoZiugBf&g9"){
        console.log(true);

    }else{
        console.log(false);
    }
};

//Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

function calcularImpuestos(edad, ingresos){
    if(edad >= 18 && ingresos >= 1000){
        return ingresos * 0.4;
    }else{
        return 0;
    };
};


/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:
"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30*/

function IMC(peso,altura){
    let calculo = peso / (altura**2);

    if(calculo <18.5){
        return "Bajo de peso";
    } else if(calculo >=18.5 && calculo <25){
        return "Normal";
    }else if(calculo >=25 && calculo <30){
        return "Sobrepeso";
    }else{
        return "Obeso";
    }
};


//Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

const array = ["Manzana", "Banana", "Naranja"];

function imprimirArreglo(array){
   array.forEach(element => {
        console.log(element)
    });
}

/* imprimirArreglo(array);
imprimirArreglo([1, "Hola", 2, "Mundo"]);
 */

/* Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:
1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string. */


function likes(numero){
    if(numero < 1000){
        return numero;
    }else if (numero < 1000000){
        let resultado = Math.floor(numero/1000)
        return `${resultado}K`;
    }else{
        let resultado = Math.floor(numero/1000000)
        return `${resultado}M`;
    }
};

/* console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M" */

/* Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número. */

function fizzBuzz(numero){
    if(numero % 3 == 0 && numero % 5 == 0){
        return "fizzbuzz";
    } else if(numero % 3 == 0){
        return "fizz";
    } else if(numero % 5 == 0 ){
        return "buzz";
    }else{
        return numero;
    };
};

/* console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8 */

/* Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):
Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo. */

function contarRango(a,b){
        let cantidadNumeros = 0;
    for (let contador = a; contador < b-1; contador++) {
        cantidadNumeros++;  
    };

    return cantidadNumeros;
};

/* console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0 */

/* Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).
Nota: puedes asumir que el número inicial va a ser menor o igual que el número final. */

function sumarRango(a,b){
    let resultado = 0;

    if(a==b){
        return 0
    }

    for(let i=a; i< b+1; i++){
        
        resultado +=i
    }

    return resultado
};

/* console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0
 */

//Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

function numeroDeAes(string){
    cantidadAes = 0;
    for(let i= 0; i < string.length ; i++){
        if(string[i] == "a"){
            cantidadAes +=1
        }
       
    }
    return cantidadAes
    
};

/* console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("alaiacamilahuamanzapata")) // 0 */

/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

function contarCaracteres(word){
    let totalCaracteres = 0;
    for(let i = 0; i < word.length; i++){
        totalCaracteres +=1;
    }

    return `La palabra ${word} tiene ${totalCaracteres} caracteres`;
};

// codigo refactorizado
const contar = (cadena) => (!cadena) ? "No se ingreso texto" : `La cadena ${cadena} tiene ${cadena.length} caracteres`;

/* console.log(contar("Hola Mundo"));
console.log(contar("")); */

/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

function recortarPalabra(word,limite){
    let palabraRecortada = "";

    for(let i = 0; i < limite; i++){
        palabraRecortada += word[i];
    };

    return palabraRecortada;
};

// codigo refactorizado
const cortar = (cadena,largo) => (!cadena) ? "No se ingreso texto" : `La cadena recortada es ${cadena.slice(0,largo)}`;

/* console.log(cortar("Hola Mundo",9));
console.log(cortar("Me llamo Juan",11));
console.log(cortar("Soy feliz",6));
 */

/*3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function unirTexto(word,caracter){
    
    let arrayCreado = [];
    let palabraNueva="";

    for(let i = 0; i < word.length; i++ ){
        if(word[i] != caracter){
            palabraNueva += word[i];
        }else{
            arrayCreado.push(palabraNueva);
            palabraNueva = "";
        };
    };

    if(palabraNueva){
        arrayCreado.push(palabraNueva);
    }

    return arrayCreado;

};


//Codigo refactorizado
const unir = (texto = "", separador = undefined) => (!texto) ? "no se ingreso ningun texto" : (separador === undefined) ? "no se ingreso el separador" : texto.split(separador);

/* console.log(unir("hola que tal", " "));
console.log(unir("me llamo Alvin y soy de Peru", " "));
 */


/*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */

function multiplicarPalabras(word,cantidad){
    let nuevaPalabra = "";

    for(let i = 0; i < cantidad; i++){
        nuevaPalabra += word + " ";
    }

    return nuevaPalabra;
};

/* console.log(multiplicarPalabras("Hola Mundo", 3));
console.log(multiplicarPalabras("aprendiendo a programar", 10));
 */
/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const invertirPalabra = (palabra="") => {

    if(!palabra) return console.error("No haz ingresado una palabra");

    return palabra.split("").reverse().join("")
};

/* console.log(invertirPalabra("me llamo Alvin"));
console.log(invertirPalabra("Hola Mundo")); */

/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

const coincidencias = (texto,palabra) =>{
    if(!texto) return console.warn("Debe ingresar un texto");
    if(!palabra) return console.warn("Debe ingresar una palabra");

    return texto.match(new RegExp(palabra,"g")).length;

};

/* console.log(coincidencias("hola mundo adios mundo","o"));
console.log(coincidencias("hola mundo adios mundo")); */


/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

const palindromo = (palabra) => {
    if(!palabra) return console.warn("No ha ingresado ninguna palabra");

    let regexp = /[^a-zA-Z]/g
    let palabraLimpia = palabra.replace(regexp,"").toLowerCase();
    let palabraInver = palabraLimpia.split("").reverse().join("");

    return palabraLimpia === palabraInver;
};

/* console.log(palindromo("Salas"))
console.log(palindromo("Anita lava la tina")) */

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const patron = (texto,patron) =>{
    if(!texto) return console.error("No ha ingresado ningun texto");

    let regexp = new RegExp(patron,"g");
    
    return texto.replace(regexp,"")
};

/* console.log(patron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")) */

/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

const numeroAleatorio = () => Math.ceil((Math.random()*100)+501);

/* console.log(numeroAleatorio()); */

/*10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

const capicua = (number) => {
    if(!number) return console.warn("No ha ingresado ningun numero");
    let numeroInvertido = number.toString().split("").reverse().join("");

    return number.toString() === numeroInvertido;
};

/* console.log(capicua(2002)); */


/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const factorial = (numero) => {
    if(!numero) return "No se ha ingresado un numero valido"
    if(numero == 1) return 1

    let factorial = 1;

    for(i = 1; i < numero + 1; i++){
        factorial *= i;
    };

    return factorial;
};

/* console.log(factorial(4)) */

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/

const numeroPrimo = (numero) =>{
    if(typeof(numero)!= "number") return "El valor ingresado no es un numero";
    if(numero < 2) return `El numero ${numero} no es un numero primo`;

    let numeroDeDivisores = 0;

   for (let i = 1; i < numero + 1 ; i++ ){
        if(numero % i == 0){
            numeroDeDivisores ++;
        };      
   };
   return numeroDeDivisores == 2;
    
};

/* console.log(numeroPrimo(7)); */


/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/

const parImpar = (numero) =>
    typeof(numero)!= "number" 
    ? "El valor ingresado no es un numero" 
    : numero % 2 == 0 
     ? "Par" 
     : "Impar";


/* console.log(parImpar(5)) */
   

/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

let convertidorDeGrados = (temperatura,sistema) => {
    if(typeof(temperatura)!= "number") return "El valor ingresado de la temperatura no es un numero";
    if(!sistema) return "Debe ingresar un sistema C = Celsius o F = Fahrenheit";
    if(typeof(sistema)!= "string") return "El sistema ingresado debe ser C o F";
    if(sistema.toLowerCase() != "c" && sistema.toLocaleLowerCase() != "f") return "El sistema ingresado debe ser C o F";

    return sistema.toLowerCase() === "c" ?  parseFloat(((temperatura * 1.8) + 32).toFixed(2)): parseFloat(((temperatura - 32) * (5/9)).toFixed(2));

};

/* console.log(convertidorDeGrados(104.3,"f")); */

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/

const convertidoDeBases = (numero,base) =>{
    if(numero == undefined) return "Debe ingresar un numero valido";
    if(typeof(numero) != "number") return "El valor ingresado debe ser un numero";
    if(base == undefined) return "El valor de la base debe ser 1 para decimal y 2 para binario";
    if(typeof(base) != "number") return "El valor ingresado debe ser un numero 1 para decimal y 2 para binario";
    if(base != 1 && base != 2) return "El valor de la base debe ser 1 para decimal y 2 para binario";

    let acumulador = [];
    let resultadoTemporal = numero;

    if (base == 1){
        
        while(resultadoTemporal != 0) {
            if(resultadoTemporal % 2 == 0){
                acumulador.push(0);
                resultadoTemporal = Math.trunc(resultadoTemporal / 2);
            }else{
                acumulador.push(1);
                resultadoTemporal = Math.trunc(resultadoTemporal / 2);         
            };
        };
        
        return acumulador.reverse().join("");

    }else{

        resultadoTemporal = 0;
        let exponente = (numero.toString().length)-1;

        for(i of numero.toString()){
            resultadoTemporal += i * (2**exponente);
            exponente --;
            
        };

        return resultadoTemporal;

    };

};

/* console.log(convertidoDeBases(1111011,2)) */

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/

const aplicarDescuento = (monto, descuento) => {
    if(typeof(monto) != "number") return "El valor ingresado debe ser un numero";
    if(monto == 0) return "El monto debe ser mayor a 0";
    if(Math.sign(monto) == -1) return "El monto no puede ser negativo";
    if(typeof(descuento) != "number") return "El valor ingresado debe ser un numero";
    if(Math.sign(descuento) == -1) return "El descuento no puede ser negativo";

    return monto - (monto*(descuento/100));
    
};

/* console.log(aplicarDescuento(1000,20)) */
/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

const diferenciaAnios = (fecha) =>{
    if(fecha == undefined || !(fecha instanceof Date)) return (`El valor ingresado ${fecha} debe ser una fecha valida`)

    let fechaActual = new Date().getFullYear();
    let fechaUsuario = fecha.getFullYear();
    let resultado = fechaActual - fechaUsuario;

    if (resultado == 0) return "Estamos en el mismo año"
    if(Math.sign(resultado)== -1){
        return `Aun faltan ${Math.abs(resultado)} años para llegar al ${fechaUsuario} `
    }else{
        return `Han pasado  ${resultado} años desde el ${fechaUsuario} `

    };
};

/* console.log(diferenciaAnios());
console.log(diferenciaAnios(50));
console.log(diferenciaAnios(new Date(2033,5,15))); */

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

const contarTexto = (texto) =>{
    if(!texto || typeof(texto) != "string") return "No haz ingresado un texto valido";
    if (!/^[a-zA-Z ]*$/.test(texto)) return "El texto ingresado no debe contener caracteres especiales y/o numeros "

    let regexp = /[aeiouAEIOU]/;
    let vocales = 0;
    let consonantes=0;

    for (let i of texto){
        if (regexp.test(i)){
            vocales +=1
        }else if (/[a-zA-Z]/.test(i)){
            consonantes +=1;
        };
    };
  
    return `El texto "${texto}" contiene ${vocales} vocales y ${consonantes} consonantes`

};

/* console.log(contarTexto("babilonia")); */
/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/

const nombrePropio = (texto) =>{
    if (!texto) return "Se debe ingresar un texto";
    if (typeof(texto) != "string") return "El valor ingresado debe ser un texto";

    let comparacion = /^[A-Z][a-z]*(?:[-' ][A-Z][a-z]*)*$/.test(texto); 

    return `El texto ingresado ${texto}, ${comparacion ? 'ES' : 'NO ES'}  un nombre valido`

};

/* console.log(nombrePropio()); */

/*20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

let correoValido = (email) =>{
        if (!email) return "Se debe ingresar un email";
        if (typeof(email) != "string") return "El valor ingresado debe ser un texto";
    
        let comparacion = /^[\w-_.]+@[\w-_.]+\.[a-z]{2,}$/.test(email);
    
        return `El email ingresado ${email}, ${comparacion ? 'ES' : 'NO ES'}  un email valido`
};


/* console.log(correoValido("usuario-52_325@dominio-url.com")); */


/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

const arrayAlCuadrado = (lista) =>{
    if(!lista || !(lista instanceof Array) ) return "Debe ingresar una lista de numeros";
    if(lista.length === 0) return "La lista no debe estar vacia";

    for ( let i of lista){
        if (typeof(i) !== 'number') return "La lista solo debe contener numeros";
    };
    
    let nuevaLista = lista.Map( i => i**2 ); 

    return `La lista elevada al cuadrado es la siguiente: ${nuevaLista}`;
};

/* console.log(arrayAlCuadrado()); */

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */
/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */
/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
Todos los datos del objeto son obligatorios.
Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
Valida que el título no rebase los 100 caracteres.
Valida que el director no rebase los 50 caracteres.
Valida que el año de estreno sea un número entero de 4 dígitos.
Valida que el país o paises sea introducidos en forma de arreglo.
Valida que los géneros sean introducidos en forma de arreglo.
Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
Crea un método estático que devuelva los géneros aceptados*.
Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
Crea un método que devuelva toda la ficha técnica de la película.
Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */


//Ejercicios Libres

/*Ejercicio: Clasificación de Datos en una Lista.
  Escribe una función llamada clasificarDatos que reciba una lista de valores mixtos y los clasifique en tres categorías:
  Números pares
  Números impares
  Otros tipos de datos (todo lo que no sea un número).
  Especificaciones:
  1.Validación inicial:
  -Verifica si la entrada es un arreglo. Si no lo es, retorna un mensaje de error: "Debe proporcionar un arreglo como entrada".
  -Si el arreglo está vacío, retorna un mensaje de error: "El arreglo no debe estar vacío".

  2.Clasificación de datos:
  -Si el arreglo contiene valores que no son números, clasifícalos en una lista llamada otros.
  Para los números, clasifícalos en: pares (si son divisibles por 2) e impares (si no son divisibles por 2).

  3.Formato de retorno:  
  -La función debe retornar un objeto con las propiedades pares, impares, y otros, cada una conteniendo su respectivo arreglo.
  -Si alguna de estas categorías está vacía, la propiedad debe tener un arreglo vacío.
*/

const calsificarDatos = (lista) => {
    // Validacion inicial
    if (!(lista instanceof Array)) return {Status: false , Msg:'Debe proporcionar un arreglo como entrada'};
    if (lista.length === 0) return {Status: false, Msg:'El arreglo no debe estar vacío'};

    let otros  = [];
    let pares = [];
    let impares = [];

    //Recorrido de la lista
    lista.forEach((i) =>{
        //Validación si es un numero u otro tipo de dato
        if(typeof(i) !== 'number'){
            //Adiciona este elemento a la lista de otros
            otros.push(i)
        } else{
            //si es par adiciona a pares sino a impares
            i % 2 === 0 ? pares.push(i) : impares.push(i); 
        };
    });

    //Retorno de la funcion
    return {
         pares ,
         impares,
         otros
    };
};

/* console.log(calsificarDatos(55822)); */

/*Ejercicio: Clasificación y Manipulación de Cadenas en una Lista
  Escribe una función llamada clasificarYProcesarDatos que reciba una lista de valores mixtos y realice las siguientes tareas:

  1.Clasificación de Datos:
  *Clasifica los elementos en tres categorías:
   -Números pares: si el elemento es un número y divisible por 2.
   -Números impares: si el elemento es un número y no es divisible por 2.
   -Cadenas: si el elemento es una cadena de texto.
   -Otros tipos de datos: para cualquier otro tipo que no sea número o cadena.

  2.Procesamiento Adicional de Cadenas:
  -Convierte todas las cadenas a minúsculas.
  -Filtra las cadenas que contengan la letra “a” y almacénalas en un arreglo llamado contienenA.
  -Filtra las cadenas que no contengan la letra “a” y almacénalas en un arreglo llamado noContienenA.

  3.Formato de Retorno:
  La función debe retornar un objeto con las propiedades pares, impares, cadenas, contienenA, noContienenA, y otros, cada una conteniendo su respectivo arreglo.
  Si alguna de estas categorías está vacía, la propiedad debe contener un arreglo vacío. 
*/

const clasificarYProcesarDatos = (lista) =>{
    //Validación del dato ingresado, debe ser una lista
    if (!(lista instanceof Array)) return {status: false , msg: 'Debe proporcionar un arreglo como entrada'};
    if (lista.length === 0) return {status: false, msg: 'El arreglo no debe estar vacío'};

    //Se definen los arreglos de salida
    const pares = [];
    const impares = [];
    const textos = [];
    const textosConA = [];
    const textosSinA = [];
    const otros = [];

    //Recorre la lista
    lista.forEach((i) =>{
        //define si es un tipo de dato numero
        if (typeof(i) === 'number'){
            //evalua si es par o impar y lo agrega a la lista correspondiente
            i % 2 === 0 
            ? pares.push(i) 
            : impares.push(i);
        //evalua si es un texto  
        }else if(typeof(i) === 'string'){
            //lo incluye en el array texto en minusculas
            textos.push(i.toLowerCase());
            //evalua sin contiene la letra a
            i.toLowerCase().includes('a') 
            //lo agrega a la lista correspondiente
            ? textosConA.push(i.toLowerCase()) 
            : textosSinA.push(i.toLowerCase());
        //lo agrega a la lista otros si no cumple con los citerios anteriores
        }else{
            otros.push(i);
        };

    });

    //retorna las lista con los valores correspondientes
    return {
        pares,
        impares,
        textos,
        textosConA,
        textosSinA,
        otros
    };

};

/* console.log(clasificarYProcesarDatos([1, "Alvaro", "beta", 4, null, "Comida", {}, [], "azul", 7, "Bondad"])); */

/*Ejercicio: Sistema Básico de Inventario de Productos
Imagina que estás construyendo un sistema simple para gestionar el inventario de una tienda. La función gestionarInventario recibirá una lista de objetos, cada uno representando un producto, y realizará varias operaciones de inventario sobre estos productos.

Detalles del Ejercicio
Escribe la función gestionarInventario(listaDeProductos). Esta función debe:

1.Validar la entrada:
-Debe ser un array no vacío y debe contener únicamente objetos con las propiedades nombre (string) y cantidad (número).
-Si la entrada no es válida, devolver un objeto con {status: false, msg: 'Error: entrada no válida'}.

2.Dividir los productos en categorías:
-Crear dos listas: una con productos que tienen cantidad > 0 (productos en stock) y otra con productos cuyo cantidad es 0 (productos agotados).

3.Realizar operaciones en las listas:
-Ordena ambas listas alfabéticamente por el nombre de los productos.
-Para cada producto en la lista de productos agotados, convierte el nombre a mayúsculas para resaltarlo.

4.Retornar un resumen del inventario:
-La función debe devolver un objeto con:
 productosEnStock: lista de productos con cantidad mayor a 0.
 productosAgotados: lista de productos con cantidad 0 (nombres en mayúsculas).
 totalProductos: número total de productos en la lista de entrada.
 totalEnStock: número de productos en stock.
*/

const gestionarInventarios = (listaProductos) => {
    if(!(listaProductos instanceof Array)) return {status: false, msg: 'Error: entrada no válida'};
    if(listaProductos.length === 0) return {status: false, msg: 'Error: la lista no debe estar vacia'};
    for (let i of listaProductos){
        if(!(i instanceof Object)) {
            return {status: false, msg: 'Error: todos los elementos de la lista deben ser objetos'};
        }else{
              if(i.hasOwnProperty('nombre') && i.hasOwnProperty('cantidad')){
                return {status: false, msg: 'Error: la lista no debe estar vacia'}
            };
        };

        
           
    };
};


console.log(gestionarInventarios([{}]));