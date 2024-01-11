// kata 1 array 6kyu
const digitize = n => {
  let strArr = n.toString().split('').reverse()
  return strArr.map(n => Number(n))
}
console.log(digitize(12345))

// kata 2 array 7kyu
const seaSick = x => {
  const cX = x.split('_~').length - 1
  const wX = x.split('~_').length - 1
  return (cX + wX)/x.length > 0.2 ? "Throw up" : "No Problem";
}
console.log(seaSick("~")) // "No Problem"
console.log(seaSick("_~~~~~~~_~__~______~~__~~_~~")) // "Throw up"
console.log(seaSick("______~___~_")) // "Throw up"

// kata 3 array 7kyu
function calc(x) {
  let total1 = [...x].map(el => el.charCodeAt()).join('')
  let total2 = total1.replace(/7/g, '1')
  let sum1 = total1.split('').reduce((ttl, cv) => ttl + +cv, 0)
  let sum2 = total2.split('').reduce((ttl, cv) => ttl + +cv, 0)
  return sum1 - sum2
}
console.log(calc('abcdef')) // 6
console.log(calc('aaaaaddddr')) // 30
console.log(calc('jfmgklf8hglbe')) // 6
console.log(calc('')) // 6