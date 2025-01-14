const fruits = Array('apple','banana','orange');
console.log(fruits);

// 1. Mutability -> A mutable object can be modified after its creation 

// 1.1 Adding a new element to "fruits" array, it modifies the original array
fruits.push('watermelon');
console.log(fruits);

// 1.2 Modifying the second element
fruits[1] = 'almond';
console.log(fruits);

// 1.3 Mutable methods:
// push: Agrega elementos al final.
// pop: Elimina el último elemento.
// shift: Elimina el primer elemento.
// unshift: Agrega elementos al inicio.
// splice: Añade, elimina o reemplaza elementos en una posición específica.
// sort: Ordena los elementos en el arreglo.


// 2. Inmutability -> An inmutable object can't be modified after its creation 
// 2.1 JS is not strict on this issue but allows you to work in an immutable way -> using methods

// 2.2 Adding new elements to "fruits" array, it will return a new array
const newFruits = fruits.concat(['pineapple','grapes','strawberries']);
console.log(newFruits)

// 2.3 Inmutable methods:
// map: Aplica una función a cada elemento y devuelve un nuevo arreglo.
// filter: Devuelve un nuevo arreglo con los elementos que cumplen una condición.
// concat: Une arreglos y devuelve un nuevo arreglo.
// slice: Extrae una parte del arreglo y devuelve un nuevo arreglo.
// reduce: Transforma un arreglo en un nuevo valor (puede ser un número, objeto, etc.).


// 3. Advantages of inmutability
// - Avoid unwanted side effects -> You don't change the source
// - Easy debugging -> You don't change the original data

// 4. Ejercicio práctico
// Ejercicio 1: Trabajando de manera inmutable
// Tienes un arreglo de números, y debes duplicar todos los números mayores a 5 sin modificar el arreglo original.
const numbers = [1,2,3,4,5,6,7,8,9,10];
const numbersDuplicatedByTwo = numbers.map((n) => (n > 5) ? n*2 : n);
console.log(numbers);
console.log(numbersDuplicatedByTwo);

// Ejercicio 2: Actualización inmutable
// Tienes una lista de usuarios y necesitas cambiar el nombre del usuario con id: 3. Devuelve un nuevo arreglo sin modificar el original.
const users = [
  {id: 1, username: 'oliver'},
  {id: 2, username: 'ariana'},
  {id: 3, username: 'timothy'},
  {id: 4, username: 'luca'},
  {id: 5, username: 'rosmery'},
];
const usersUpdated = users.map((user) => user.id === 3 ? {...user,username:'timothee'} : user);
console.log(users);
console.log(usersUpdated);