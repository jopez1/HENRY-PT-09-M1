
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10   
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // undefined
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // "Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor); // "Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // "Franco"
   }
})();
console.log(instructor); // "Tony"
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash"; 
    let pm = "Reverse Flash";
    console.log(instructor); // "The Flash";
    console.log(pm); // "Reverse Flash";
}
console.log(instructor); //"Tony";
console.log(pm); // "Franco";
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // Nan
7 / 0 // error
{}[0] // undefined
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // [-4]
3>2>1 // true
[] == ![] // false
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined, esta declarada dentro de la funcion
   console.log(foo()); // 2, se esta invocando a la funcion dentro de la funcion

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); // Cuando intentamos loguear a JS entiende el espacio definido en memoria bajo el nombre b pero no puede leer qué tiene dentro. En cambio cuando invoca la función foo continúa leyendo la función test hasta encontrar el retorno y devolverlo.
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

getFood(false); // undefined, No hay una variable snack definida dentro de la función getFood que se pueda retornar.


```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // 'Aurelio De Rosa'

var test = obj.prop.getFullname; 

console.log(test()); // undefined
// El primer console log es debido a que nuestro getter buscará primero el fullname en su entorno de ejecución.El segundo console log nos dará un error porque la función test está mal definida, estamos intentado invocarla fuera de un entorno donde exista algo llamado fullname, entonces busca en el goblal donde claramente no hay una función definida bajo ese nombre.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // 1 , imprime este numero ya que esta en la primera linea de codigo
            // 3, lee el codigo y lo primero que encuentra es este nuemero lo imprime al momento ya que tiene 0 seg
            // 4 , imprime 4 porque "tiene tiempo"
            // 5 , por ultimo imprime 5 ya que se le indica que asi sea despues de 1000 milseg.  
```
