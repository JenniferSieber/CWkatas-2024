console.log('Jan 5, 2024')
// kata 1 8kyu
const warnTheSheep = queue => {
  let sheepInDanger = queue.slice(queue.indexOf('wolf') + 1).length
  return sheepInDanger ? `Oi! Sheep number ${sheepInDanger}! You are about to be eaten by a wolf!` : 'Pls go away and stop eating my sheep'
}
console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]))
console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf"]))
console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep", "sheep", "sheep"]))

// kata 2 7kyu
const cantBeatSoJoin = numbers => {
  return numbers.sort((a,b) => b.reduce((ttl, cv) => ttl + cv, 0) - a.reduce((ttl, cv) => ttl + cv, 0)).flat();
}
console.log(cantBeatSoJoin([[1,2], [3,4], [5,6], [7,8], [9]]))

