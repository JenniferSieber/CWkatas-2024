// kata 1 7kyu
const mergeArrays = (a,b) => {
  let array = [...a, ...b]
  return [...new Set(array)].sort((a,b) => a - b)
}
console.log(mergeArrays([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6])
console.log(mergeArrays([2, 4, 8], [2, 4, 6])) //  [2, 4, 6, 8]

// kata 2 6kyu
const getLengthOfMissingArray = arrays => {
  let arr = (arrays || [])
    .map(a => a ? a.length : 0)
    .sort((a,b) => a - b)
  if (arr.includes(0)) return 0

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i] + 1
    }
  }
  return 0;
}
console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(getLengthOfMissingArray([[], [1,2]]))
console.log(getLengthOfMissingArray([[ [ null ], [ null, null, null ]]]))

// kata 3 6kyu
//return "[{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]
// string "red 1 yellow 2 black 3 white 4"
// https://www.codewars.com/kata/5877786688976801ad000100/train/javascript

// const wordsToObject = input=> {
//   let arr = input.split(' ')
//   let newArr = []
 
//   for (let i = 0; i < arr.length; i++) {
    
//     if (i % 2 == 0) {
//       newArr.push({name: arr[i], id: arr[i + 1]})
//     }
//   }
//   return newArr
// }
const wordsToObject = input=> {
  let arr = input.split(' ')
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      let newStr = `name : '${arr[i]}', id : '${arr[i + 1]}'`
      newArr.push("{" + newStr +"}")
    }
  }
  return "[" + `${newArr.join(", ")}` + "]"
}
console.log(wordsToObject("red 1 yellow 2 black 3 white 4"))
