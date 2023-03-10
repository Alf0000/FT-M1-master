# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);      // x = 10
   console.log(a);      // a = 8
   var f = function (a, b, c) {
      b = a;
      console.log(b);   // b = 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);      // b = 9
};
c(8, 9, 10);
console.log(b);         // b= 10
console.log(x);         // x = 1
```

```javascript
console.log(bar);       // bar = 1
console.log(baz);       // baz = no definida
foo();
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);   // instructor = Franco
```

```javascript
var instructor = 'Tony';
console.log(instructor);   // instructor = Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);   // Franco
   }
})();
console.log(instructor);         // Tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);         // The Flash
   console.log(pm);                 // Reverse Flash
}
console.log(instructor);            // The Flash
console.log(pm);                    // Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"           // 2
"2" * "3"         // 6
4 + 5 + "px"      // '9px'
"$" + 4 + 5       // '$45'
"4" - 2           // 2
"4px" - 2         // NaN
7 / 0             // Infinity
{}[0]             // array [0]
parseInt("09")    // 9
5 && 2            // da 2, porque es el último y es true
2 && 5            // da 5, porque es el último y es true.
0 && 4            // da 0, porque es false.
4 && 0            // da 0, porque es false.
5 || 0            // da 5, porque 0 es false. || siempre será el que sea de 1ero true.
0 || 5            // da 5, porque 0 es false. || siempre será el que sea de 1ero true.
[3]+[3]-[10]      // da 23,xq el '+' los transforma en string, el '-' lo transforma a números.
3>2>1             // false. js lo hace x partes 1er (3>2) lo cual es true y la expresion (3>2) se transforma a 1 y 1 NO > que 1.
[] == ![]         // true.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);      // undefined
   console.log(foo());  // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();     // 
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); // si es false, undefined, si es true, Friskies.
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); //Aurelio de Rosa.

var test = obj.prop.getFullname;

console.log(test()); // Juan Pérez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
```
