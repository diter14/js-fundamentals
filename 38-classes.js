// CLASES

// 1. Las clases son una forma moderna de crear objetos y manejar herencia
// 2. Utiliza un constructor() para inicializar valores 

class Pet {
  constructor(name, petType, age, owner) {
    this.name = name
    this.petType = petType
    this.age = age
    this.owner = owner
  }

  greet() {
    console.log(`Hello! My name is ${this.name}, I'm a ${this.petType} and my owner is ${this.owner}`)
  }
}

const carolg = new Pet('Carol G', 'Cat', 4, 'Gianella')
const tomy = new Pet('Tomy', 'Dog', 11, 'Diter')
const micha = new Pet('Lola', 'Cat', 3, 'Manu')
const manchis = new Pet('Manchis', 'Dog', 6, 'Graciela')

carolg.greet()
tomy.greet()
micha.greet()
manchis.greet()

// # Programación orientada a objetos en JavaScript
// - JavaScript funciona con objetos y prototipos, y la programación orientada a objetos se basa en el concepto de herencia.
// - Entender cómo funcionan los prototipos y la herencia es crucial para trabajar con clases y funciones constructoras en JavaScript.

// # Clases y funciones constructoras
// - Una clase o función constructora actúa como un molde para crear objetos.
// - Estas estructuras definen propiedades y métodos que se utilizarán para crear instancias con información específica.

// # Prototipos en JavaScript
// - Las funciones constructoras generan automáticamente un prototipo.
// - El prototipo contiene todas las propiedades y métodos que se compartirán o heredarán en las instancias creadas a partir de la clase principal.