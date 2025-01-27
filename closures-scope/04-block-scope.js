function printHokages() {
  let isBlock = true
  if (isBlock) {
    var firstHokage = 'Hasirama Senju' // it takes: Function scope
    let secondHokage = 'Tobirama Senju' // it takes: Block scope
    const thirdHokage = 'Hiruzen Sarutobi' // it takes: Block scope
  }

  console.log(firstHokage) // It works: Because the variable "firstHokage" was declared using "var" and the hoisting elevates the declaration to the parent scope
  console.log(secondHokage) // ReferenceError: username is not defined, because the variable "secondHokage" was declared using "let" it has block scope
  console.log(thirdHokage) // It never be printed because line 10
}

printHokages()