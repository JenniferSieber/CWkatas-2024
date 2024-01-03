// Codewar Katas 
// Jan 3, 2024  
// kata 1 https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
const evenOrOdd = number =>  (number) % 2 === 0 ? 'Even' : 'Odd';

console.log(evenOrOdd(2))
console.log(evenOrOdd(-7))
console.log(evenOrOdd(0))

// kata 2  https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe 
const oddBall = arr => arr.includes(arr.indexOf('odd'));
console.log(oddBall(["even",4,"even",7,"even",55,"even",6,"even",10,"odd",3,"even"]))
console.log(oddBall(["even",4,"even",7,"even",55,"even",6,"even",9,"odd",3,"even"]))
console.log(oddBall(["even",10,"odd",2,"even"]))

