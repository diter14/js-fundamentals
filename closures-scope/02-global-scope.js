/*

    Scope
        Determines the accesibility of variables, objects and functions where them can be read.

    Types:
        - Global scope
        - Function scope
        - Block scope
*/

// Declaring
var fruit; // declaring
var character = 'Naruto' // declaring and assigning
character = 'Boruto' // re-assigning
var fruit = 'apple' // re-declaring


// > Global Scope
var animal = 'Dog'

function getAnimal() {
    console.log(animal)
}

getAnimal()
console.log(animal)


// > Be careful when you just "assign" a variable without declaring it
function getMovie() {
    movie = 'Avengers Endgame'
}
getMovie() // Output: 'Avengers Endgame'
console.log(movie) // Line 32: the variable 'movie' was just assigned and never declared so it will automatically be declared as "global variable"