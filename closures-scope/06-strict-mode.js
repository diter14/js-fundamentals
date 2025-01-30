'use strict'
iAmDeveloper = true;
console.log(iAmDeveloper) // ❌ ReferenceError: iAmDeveloper is not defined

// 1. Atributos de solo lectura
'use strict'
const user = {}
Object.defineProperty(user, 'name', {value: '@diterino', writable: false})
console.log(user.name)
user.name = '@gianellis'
console.log(user.name) // ❌ TypeError: Cannot assign to read only property 'name' of object '#<Object>'
