function greetUser() {
  let username = 'Diterino'
  console.log(username)

  if (username === 'Diterino') {
    console.log(`Hello ${username}`)
  }
}

greetUser()
console.log(username) // ReferenceError: username is not defined -> Because the variable "username" was declared in a function scope: "greetUser()"