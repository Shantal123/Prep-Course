function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí
    var cont=0;  
    for (let i = 0; i < arreglo.length; i++) {
      if(arreglo[0]===arreglo[i]){
        cont=cont+1;
      }
      if(cont===arreglo.length){
        return true;
      }return false;
    }
  } 

  var igux=[1,1,1,1,1,1,1];
  console.log(todosIguales(igux));
  
