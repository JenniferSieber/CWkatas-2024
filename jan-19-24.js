console.log('Jan 19, 2024')

// kata 1  7kyu 
const numbersGrouping = a =>
  new Set(a.map(val => --val / 1e4 ^ 0)).size + a.length;
console.log(numbersGrouping([20000, 239, 10001, 999999, 10000, 20566, 29999]))

// kata 2
function countBy(x, n) {
  let i = 1
  let arr = []
  do {
    console.log(i)
    let value = i * x
    arr.push(value)
    i++
  } while (arr.length < n)
  return arr
}
console.log(countBy(1,10))
console.log(countBy(2, 5))
