// FUNCIÓN CONSTRUCTORA : construir objetos

// 1. Es como una plantilla que utiliza para instanciar múltiples veces diferentes objetos manteniendo propiedades / atributos y métodos
// 2. Todas las funciones tienen la propiedad "prototype" que permite compartir / heredar propiedades y métodos

// Starts with capital letter
function Person(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

const person1 = new Person('Diterino', 'Terrones', 30)
const person2 = new Person('Gianella', 'Asqui', 26)
const person3 = new Person('Oliver', 'Terrones', 5)

console.log(person1)
console.log(person2)
console.log(person3)

// Exercise
function NarutoVerse(characterName, ninjaLevel, village, specialAttack) {
  this.characterName = characterName
  this.ninjaLevel = ninjaLevel
  this.village = village
  this.specialAttack = specialAttack

  this.presentation = function () {
    console.log(`I'm ${this.characterName}, a ${this.ninjaLevel} from ${this.village} and take my: ${this.specialAttack}!`)
  }
}

const kakashi = new NarutoVerse('Kakashi','Jounin','Konoha','Chidori')
const jiraiya = new NarutoVerse('Jiraiya','Sannin','Konoha','Jutsu de invocacion')
const minato = new NarutoVerse('Minato','Hokage','Konoha','Hiraishin')
const naruto = new NarutoVerse('Naruto','Hokage','Konoha','Rasengan')

console.log(kakashi.presentation())
console.log(jiraiya.presentation())
console.log(minato.presentation())
console.log(naruto.presentation())
