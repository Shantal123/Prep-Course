// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var i=0;
      return array[i];

}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

      return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i=0;i<array.length;i++){
    array[i]+=1;
    }return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  let UltimoEl=array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  let PrimerEl=array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var cont=0;
  for(let i=0;i<array.length;i++){
    if(array[i]===elemento){
      cont=cont+1
    }
  }
  if(1<=cont){
    return true;
  } return false;
}
//return array.includes(elemento);


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sum=0;
  for(var i=0;i<numeros.length;i++){
    sum+=numeros[i];
  }return sum;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sum=0;
  for(var i=0;i<resultadosTest.length;i++){
    sum=sum+resultadosTest[i];
  }
  var promedio=sum/resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max=Math.max(...numeros);
  return max;
  
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments===1) return arguments;
  if(arguments<1) return 0;
  let multiplicacionTotal=1;
  for (let i = 0; i < arguments.length; i++) {
    multiplicacionTotal=multiplicacionTotal*arguments[i];
  }
  return multiplicacionTotal;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cont=0;
  for(var i=0;i<arreglo.length;i++){
    if(arreglo[i] > 18){
      cont=cont+1;
    }
  }return cont;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
    if(numeroDeDia<7&&numeroDeDia!==1){
      return "Es dia Laboral";
    }return "Es fin de semana";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var digitos=0,num=Math.pow(10,digitos);
  while(1<=n){
    n=n/10;
    digitos=digitos+1;
  }
  if(Math.floor(n*10)===9){
      return true
    }return false;
  }


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var cont=0;  
  for (let i = 0; i < arreglo.length; i++) {
    if(arreglo[0]===arreglo[i]){
      cont=cont+1;
    }

  } if(cont===arreglo.length){
      return true;
    }return false;
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var conte=0, contm=0,contn=0,arrayNuevo=[];  
  for (let i = 0; i < array.length; i++) {
    if(array[i]==="Enero"){
      conte=conte+1;
      arrayNuevo.push(array[i]);
    }
    if(array[i]==="Marzo"){
      contm=contm+1;
      arrayNuevo.push(array[i]);
    }
    if(array[i]==="Noviembre"){
      contn=contn+1;
      arrayNuevo.push(array[i]);
    }

  } if(1<=conte&&1<=contm&&1<=contn){
      return arrayNuevo;
    }return "No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arrayNuevo=[];  
  for (let i = 0; i < array.length; i++) {
    if(100<array[i]){
      arrayNuevo.push(array[i]);
    }
  } 
      return arrayNuevo;
}



function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let nuevoArray=[];
  let cont=0;
  let copia=numero;
  for (let i = 0; i < 10; i++) {
    copia=copia+2;
    nuevoArray.push(copia);
    cont=i;
    if(copia===i){
      break;
    }
  }if(cont+1<10){
    return "Se interrumpió la ejecución"
  }return nuevoArray;;
}





function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let nuevoArray=[];
  let cont=0;
  let copia=numero;
  for (let i = 0; i < 10; i++) {
    copia=copia+2;
    nuevoArray.push(copia);
    cont=i;
    if(5===i){
      copia=copia-2;
      nuevoArray.pop(copia);
      continue;
    }
  }return nuevoArray;;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
