console.log('Jan 24th 2024')
console.log(`methods: Strings: toLowerCase(), split() & Arrays: includes, filter, indexOf, lastIndexOf, shift, map, sort`)

// kata 1  6kyu
const arrayDiff = (a,b) => a.filter(el => !b.includes(el))
console.log(arrayDiff([1,2], [2])) // [1]
console.log(arrayDiff([1,2,3,4], [1,2])) // [3,4]
console.log(arrayDiff([1,2,3,4], [])) // [1,2,3,4]
console.log(arrayDiff([], [1,2])) // []

// kata 2 6kyu --finding Unique like on Jan 7
const duplicateEncode = str => {
  let arr = str.toLowerCase().split('')
  return arr.map(el => {
    return arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')';
  }).join('')
}
console.log(duplicateEncode('din')) // "((("
console.log(duplicateEncode('Success')) // ")())())"
console.log(duplicateEncode('(( @')) //"))(("

// kata 3 6kyu 
const sortArr = arr => {
  const odds = arr.filter(el => el % 2).sort((a,b) => a - b)
  return arr.map(el => el % 2 ? odds.shift() : el)
}
console.log(sortArr([5, 3, 2, 8, 1, 4])) // [1, 3, 2, 8, 5, 4]