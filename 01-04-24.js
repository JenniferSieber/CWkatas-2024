console.log('Jan 4, 2024')

// kata 1 
const findNeedle = haystack => 'found the needle at position ' + haystack.indexOf('needle');
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "randomJunk"]));

// kata 2 
const positiveSum = arr => arr.filter(num => num > 0).reduce((ttl, cv) => ttl + cv, 0);
console.log(positiveSum([1,-4,7,12]));

// kata 3 
const sumTwoSmallestNumbers = numbers => {
  numbers.sort((a,b) => a - b)
  return numbers[0] + numbers[1]
 //return sum
}
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
