'use strict';

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
   this.value = value,
   this.right = null,
   this.left = null;
}


BinarySearchTree.prototype.insert = function (value) {
   if (this.value > value){
      if (!this.left) this.left = new BinarySearchTree(value)
      else this.left.insert(value)
   }
   else{
      if (!this.right) this.right = new BinarySearchTree(value)
      else this.right.insert(value)
   }
}


BinarySearchTree.prototype.size = function(){
   if (!this.left && !this.right) return 1
   if (this.left && !this.right)  return 1 + this.left.size()
   if (!this.left && this.right)  return 1 + this.right.size()
   if (this.left && this.right)   return 1 + this.left.size() + this.right.size()
}


BinarySearchTree.prototype.contains = function(value){
   if (this.value === value) return true;
 
   if (this.value > value) {
      if (!this.left) return false;
      else return this.left.contains(value);
   } 
   else {
      if (!this.right) return false;
      else return this.right.contains(value);
     }
}


BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  //izq-der-root
   if (order === 'post-order') {
      if (this.left) this.left.depthFirstForEach(cb, order)
      if (this.right) this.right.depthFirstForEach(cb, order)
      cb(this.value)
   }
   // root-izq-der
   else if (order === 'pre-order') {
      cb(this.value)
      if (this.left) this.left.depthFirstForEach(cb, order)
      if (this.right) this.right.depthFirstForEach(cb, order)
   }
   // izq-root-der
   else {
      if (this.left) this.left.depthFirstForEach(cb, order)
      cb(this.value)
      if (this.right) this.right.depthFirstForEach(cb, order)
   }
}


BinarySearchTree.prototype.breadthFirstForEach = function(cb, array=[]){
   cb(this.value)
   if (this.left) array.push(this.left)
   if (this.right) array.push(this.right)

   let prox = array.shift()
   if (prox) prox.breadthFirstForEach(cb, array)
   /*if (array.length > 0) array.shift().breadthFirstForEach(cb, array) */
}


var arbol = new BinarySearchTree(20)

/* arbol.insert(15)
arbol.insert(25)
arbol.insert(5)
arbol.insert(17)
arbol.insert(21)
arbol.insert(28)
arbol.insert(0)
arbol.insert(14)
arbol.insert(50)
arbol.insert(1)
arbol.insert(45)
arbol.insert(13)
arbol.insert(12)
arbol.insert(11)
arbol.insert(30)
arbol.insert(35)
arbol.insert(33)
arbol.insert(31)
arbol.insert(34) */
//console.log(arbol)
//console.log('---------------------------------- >', arbol.size())
//arbol.contains(45)


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
