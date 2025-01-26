/*

"this" se refiere y/o apunta a las instancias que se crean a partir de una clase o función constructora

*/

class Character {
  constructor(name, nickname) {
		this.name = name
		this.nickname = nickname
  }
}

class Hero extends Character {
	constructor(name, nickname, attack) {
		super(name, nickname)
		this.attack = attack
	}

	specialAttack() {
		console.log(`${this.name}, ${this.nickname}, is attacking with ${this.attack}`)
	}
}

const thor = new Hero('Thor', 'God of Thunder', 'Mjolnir')
thor.specialAttack()