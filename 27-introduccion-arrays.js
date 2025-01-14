// How to create an array

// 1. new Array() or Array()
const fruits = Array('apple','banana','orange');
console.log(fruits);

const justOneNumberArray = Array(1);
console.log(justOneNumberArray);

const numbersArray = Array(1,2,3,4);
console.log(numbersArray);

// 1.1 With just one argument
const emptyArray1 = Array(5); // It creates an empty array with lenght: 5
const emptyArray2 = new Array(5); // The same

console.log(emptyArray1); // [ <5 empty items> ]
console.log(emptyArray2); // [ <5 empty items> ]

// 1.2 Be careful! Array(1) vs Array("1")
console.log(Array(3)); // [ <3 empty items> ] → It creates an empty array with lenght: 3
console.log(Array("3")); // ["3"] → It creates an array with just one element: "3"


// 2. Array literal syntax
const oneNumber = [4];
console.log(oneNumber);

// 2.1 Array mixed
const recipe = [
  'Flour',
  2,
  false,
  { ingredient: 'Milk', toasted: false },
  5.5
];
console.log(recipe);


// 3. Accessing array elements
const firstFruit = fruits[0];
console.log(firstFruit);

// 4. Create an array with X auto-incremental elements
const dimension = 5;
console.log(Array(dimension).fill(0).map((_,i) => i++ ));
console.log(Array(dimension).fill(0).map((_,i) => i + 1 ));