// kata 1
const twoOldestAges = ages => {
 ages.sort((a,b) => b - a)
 return [ages[0], ages[1]].sort((a,b) => a - b)
}
console.log(twoOldestAges([1, 2, 10, 8]))
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]))

// kata 2
const partList = arr => arr.map((el, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1)

console.log(partList(["I", "wish", "I", "hadn't", "come"]))
console.log(partList(["az", "toto", "picaro", "zone", "kiwi"]))

// kata 3
// add up the non-string integers and subtract the total of the string integers.
const divCon = arr => {
  let n = []
  let s = []
//   arr.forEach(el => {
//   if (typeof el === 'number') {
//     n.push(el)
//   } else if (typeof el === 'string') {
//     s.push(Number(el))
//   }
// })
  arr.forEach(el => (typeof el === 'number') ? n.push(el) : s.push(Number(el)))
  return n.reduce((ttl, cv) => ttl + cv, 0) - s.reduce((ttl, cv) => ttl + cv, 0)
}
console.log(divCon([9, 3, '7', '3']))