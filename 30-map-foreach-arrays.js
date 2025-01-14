// map() -> Iterates over an array and return a new one (without modifying the original)
const numbers = [5, 2, 7, 3]
const squaredNumbers = numbers.map(n => n*n)
console.log(numbers)
console.log(squaredNumbers)

// forEach() -> Iterates over an array and returns NOTHING
const teams = ['Barcelona','Liverpool','Bayern']
const iteratedTeams = teams.forEach(team => console.log(team))
console.log(iteratedTeams)

// Exercise #1
const fahrenheitTemperatures = [32,68,95]
const celsiusTemperatures = fahrenheitTemperatures.map(t => (t-32)*5/9)
console.log('Fahrenheit: ',fahrenheitTemperatures)
console.log('Celsius: ',celsiusTemperatures)

// Exercise #2
let sumOfAllElements = 0
for (let i = 0; i < numbers.length; i++) {
  sumOfAllElements += numbers[i]
}
console.log('Sum of all elements: ',sumOfAllElements)


// Ejercicios avanzados con map
// 1. Transformar datos complejos
// Tienes un arreglo de objetos que representan productos. Crea un nuevo arreglo que incluya solo el nombre de los productos en mayúsculas y su precio incrementado en un 10%.

const products = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Celular", price: 800 },
  { id: 3, name: "Tablet", price: 400 },
];

// Resultado esperado:
// [
//   { name: "LAPTOP", new_price: 1650 },
//   { name: "CELULAR", new_price: 880 },
//   { name: "TABLET", new_price: 440 },
// ]

const newProductsList = products.map((product) => {
  return {
    name: product.name.toUpperCase(), 
    new_price: parseInt((product.price * (1.10)),0)
  }
})
console.log('Original Products:', products)
console.log('New Products:', newProductsList)


// 2. Transformar un arreglo anidado
// Dado el siguiente arreglo de arreglos, usa map para convertirlo en un arreglo plano de cadenas.
const fullNames = [
  ["Juan", "Perez"],
  ["Maria", "Lopez"],
  ["Pedro", "Gomez"],
];
// Resultado esperado:
// ["Juan Perez", "Maria Lopez", "Pedro Gomez"]
const fullNamesFlat = fullNames.map(([firstname, lastname]) => `${firstname} ${lastname}`)
console.log('Full names flatten: ', fullNamesFlat)


// 3. Filtrar y transformar en un paso
// Dado un arreglo de estudiantes con sus calificaciones, crea un nuevo arreglo que contenga solo los nombres de los estudiantes que aprobaron (nota >= 11).
const students = [
  { name: "Ana", score: 16 },
  { name: "Luis", score: 8 },
  { name: "Pedro", score: 13 },
  { name: "Laura", score: 9 },
];
// Resultado esperado:
// ["Ana", "Pedro"]
const approvedStudents = students
                          .filter(student => student.score >= 11 )
                          .map(student => student.name)
console.log('Approved Students', approvedStudents)

// 4. Calcular totales
// Tienes un arreglo de objetos que representan compras en una tienda. Usa map para calcular el precio total (cantidad × precioUnitario) de cada compra y generar un nuevo arreglo con esos totales.
const shoppingItems = [
  { product: "Manzanas", qty: 3, unitPrice: 2 },
  { product: "Pan", qty: 2, unitPrice: 3 },
  { product: "Leche", qty: 1, unitPrice: 5 },
];
// Resultado esperado:
// [6, 6, 5]
const shoppingItemsWithTotals = shoppingItems.map((item) => {
  return {
    ...item, 
    totalPrice: item.qty*item.unitPrice
  }
})
console.log('Shopping List with Totals: ', shoppingItemsWithTotals)