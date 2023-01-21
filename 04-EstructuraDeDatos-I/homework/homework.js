'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if (n===1) return 1
   return (n * nFactorial(n-1))
}

// EJERCICIO 2
function nFibonacci(n) {
   if (n===0 || n===1) return n
   return nFibonacci(n-2) + nFibonacci(n-1)
}

// EJERCICIO 3
function Queue() {
   this.arreglo_= []
}

Queue.prototype.enqueue = function(valor){
    this.arreglo_.push(valor)
}

Queue.prototype.dequeue = function(){
  return this.arreglo_.shift()
}

Queue.prototype.size = function(){
    return this.arreglo_.length
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
