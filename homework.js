'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  //FUENTE Jimena Medina COHORTE PT08
 
  let arr = [1] // se empieza a guardar el primer numero primo
  let primo = 2 // es clave que sea dos porque mas adelante se tiene que dividir

  while(num !== 1){  //caso de corte
  if(num % primo === 0){
  arr.push(primo) // recordar que es un bucle y se sigue iterando mientras se siga cumpliendo la condicion
  num = num / primo
  }  else{
    primo ++  // para todo lo demas se sigue 
  }              
  }
return arr
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
for(let i = 0; i < array.length; i ++){
  for(let j = 0; j < array.length - 1 - i; j++){ // LA i ASEGURA QUE VAYA PASANDO COMPARANDO TODO EL ARRAY, QUE SI NO SOLO LO COMPARA UNA VEZ
    if(array[j] > array[j + 1] ){ //aqui es justamente cuando compara 
    //swap en esta parte hace el cambio
    var aux = array[j];
    array[j] = array[j + 1];
    array[j + 1] = aux;
  }
}
}
return array;

}

  function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
  for(let i = 1; i < array.length; i++){
    let j = i - 1;
    let aux = array[i];
    while(j >= 0 && array[j] > aux){
      array [j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }
  return array;
  }


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i++){
    let min = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[min]){
        min = j
      }
    }
    if(i != min){
      let aux = array[i]
      array[i] = array[min];
      array[min] = aux;
    }
  }
   return array;
} 


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
