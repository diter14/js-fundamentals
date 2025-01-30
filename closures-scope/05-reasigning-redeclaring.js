// Declaring, asigning and re-asigning with VAR

// Case 1: 
var character // It's declared but not assigned -> Default value: undefined
character = 'Naruto' // assigned
console.log(character)

// Case 2
var age = 29 // declared / assigned
age = 30 // re-assigned
console.log(age)

// Case 3
var petName = 'Tomy' // declared / assigned
var petName = 'Carol' // re-declared / re-assigned
console.log(petName)


// LET

// Case 1
let course = 'Javascript Basic' // ✅ declared / assigned
course = 'Javascript Advanced'
console.log(course)

let course = 'Javascript PhD' // ❌ re-declared / re-assigned -> SyntaxError: Identifier 'course' has already been declared
console.log(course)


// CONST
const worthyCharacter = 'Steve Jobs' // ✅ declared / assigned
worthyCharacter = 'Mahatma Gandhi' // ❌ re-declared / re-assigned -> TypeError: Assignment to constant variable.
console.log(worthyCharacter)

const goldenAge // ❌ CONST variables always must be assigned on declaration -> TypeError: Assignment to constant variable.
goldenAge = 20
console.log(goldenAge)

// CONST with ARRAYS / OBJECTS
const books = []
books.push('Atomic Habits')
books.push('Unlimited Powers')
books.push('Indomable')
books.push('Invicto')
books.push('The art of focus')
console.log(books)

// When we work with ARRAYS and OBJECTS using CONST, the reference to the variable can't be reassigned, you can add, modify or delete elements but can't reassign to a different object / array
const numbers = [1, 2, 3];
numbers = [4, 5, 6]; // ❌ Error: Assignment to constant variable

const squared = [1, 2, 3];
//
squared.splice(0, 1, 1);
squared.splice(1, 1, 4);
squared.splice(2, 1, 9);
console.log(squared) // ✅ [1,4,9]
//
squared = [1,4,9] // ❌ Error: Assignment to constant variable