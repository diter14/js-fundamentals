class SuperHero {
  constructor(name, universe) {
    this.name = name
    this.universe = universe
  }

  greet() {
    console.log(`I'm ${this.name}, from ${this.universe}`)
  }
}

class Avenger extends SuperHero {
  constructor(name, universe, team) {
    super(name, universe)
    this.team = team
  }

  greet() {
    super.greet()
    console.log(`And I am an Avenger from the ${this.team}`)
  }

  mission() {
    console.log(`${this.name} has to fight with Hydra`)
  }
}

const captainAmerica = new Avenger('Steve Rogers','Earth 616','Illuminatis')
const spiderman = new Avenger('Peter Parker','Earth Prime','Neighborhood')

captainAmerica.greet()
captainAmerica.mission()

spiderman.greet()
spiderman.mission()

console.log('================')

// Adding a method just for the instance of "spiderman"
spiderman.spiderSense = function() {
  console.log(`I'm ${this.name} and I can feel the trouble coming`)
}

spiderman.spiderSense()
// captainAmerica.spiderSense() // Returns error because 'spiderSense' was just defined by 'spiderman' instance

// Adding a method using prototype to share methods
Avenger.prototype.spiderSenseProtoType = function() {
  console.log(`I'm ${this.name} and I can feel the trouble coming from prototype`)
}