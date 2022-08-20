"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  //en este y los homeworks anteriores primero asignamos "valores" sobre los que vamos a trabajar
  this.value = value;
	this.left = null;
	this.right = null;
} 

//fuera del bloque definimos lo metodos que hagan lo que tengan que hacer tener en cuenta que nos piden que sean recursivos

BinarySearchTree.prototype.insert = function(value){
  //pensar si el valor recibido es mayor o menor
// insertar a la izquierda(numeros menores)
if(this.value > value){
  if(!this.left) this.left = new BinarySearchTree(value) //this.left === null
  else this.left.insert(value)

  // insertar a la derecha(numeros mayores)
}else if(this.value < value){
  if(!this.right) this.right = new BinarySearchTree(value)
  else this.right.insert(value)
}
}

BinarySearchTree.prototype.size = function(){
//pensar que hay que sumar todos los nodos del arbol en sus diferentes niveles y de izquierda a derecha
//caso de corte
if(!this.left && !this.right) return 1
if(this.left && !this.right) return 1 + this.left.size()
if(!this.left && this.right) return 1 + this.right.size()
if(this.left && this.right) return 1 + this.right.size() + this.left.size()
}



BinarySearchTree.prototype.contains = function(value){
if(this.value === value) return true;
if(value > this.value){
  if(!this.right)return false;
  else return this.right.contains(value);
}
if(value < this.value){
  if(!this.left) return false;
  else return this.left.contains(value);
}
}

// recibimos como parametro cb y order(se autollaman cuando las declaramos dentro del bloque(recursividad))
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  //pensar como hace el recorrido depthFirstForEach(ver imagen para dare una idea)

if(order === "post-order"){
  if(this.left) this.left.depthFirstForEach(cb, order)
  if(this.right) this.right.depthFirstForEach(cb, order)
  cb(this.value)
}
if(order === "pre-order"){
  cb(this.value)
  if(this.left) this.left.depthFirstForEach(cb, order)
  if(this.right) this.right.depthFirstForEach(cb, order)
}else if
  (order === "in-order" || !order === undefined){
    if(this.left) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if(this.right) this.right.depthFirstForEach(cb, order)
}
}


BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
//notese que en este ejercicio necesitamos un array como parametro para ir guardando la referencia
cb(this.value)
if(this.left) array.push(this.left)
if(this.right) array.push(this.right)

let next = array.shift()
//caso de corte y a la vez mi llamada a recursion
if(next) next.breadthFirstForEach(cb, array)
//if(array.length > 0) array.shift().breadthFirstForEach(cb, array)

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
