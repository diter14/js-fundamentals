/*
  Structure of data
  key - value

  object {
    key: value,
    key: value,
    attribute: value,
    property: value,

    methods() {} // functions inside an object
  }
*/

const person = {
  name: 'Oliver',
  age: 25,
  address: {
    street: 'Calle Bajada Balta 230', 
    district: 'Miraflores',
    city: 'Lima'
  },
  greets() {
    console.log(`${person.name} says hello!`)
  },
  greetsUsingThis() {
    console.log(`${this.name} says hello!`)
  },
  greetsUsingArrow: () => {
    // Won't work, because the arrow function has the window object as scope context
    console.log(`${this.name} says hello!`)
  },
}

console.log('1',person.greets())
console.log('2',person.greetsUsingThis())
console.log('3',person.greetsUsingArrow())

// Adding a new method
person.goodbye = () => { console.log('Goodbye!') }
console.log('4',person.goodbye())