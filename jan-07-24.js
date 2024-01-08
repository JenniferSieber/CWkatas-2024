// kata 1  6kyu
// => returns "(123) 456-7890"
const createPhoneNumber = nums => `(${nums[0]}${nums[1]}${nums[2]}) ${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

// kata 2 8kyu
const countSheeps = sheep => sheep.filter(el => el === true).length; 
console.log(countSheeps([true,  true,  true,  false, true,  true,  true,  true ,true,  false, true,  false,true,  false, false, true ,true,  true,  true,  true ,false, false, true,  true]))
console.log(countSheeps([true, false, undefined, null, false, true, undefined, null]))

// kata 3 8kyu - adjustment to kata 2
const countSheep = arr => arr.filter(Boolean).length
console.log(countSheep([true,  true,  true,  false, true,  true,  true,  true ,true,  false, true,  false,true,  false, false, true ,true,  true,  true,  true ,false, false, true,  true]))
console.log(countSheep([true, false, undefined, null, false, true, undefined, null]))

//kata 4 6kyu
const findUniq = arr => arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num))

console.log(findUniq([ 1, 0, 0 ]))
console.log(findUniq([ 0, 2, 0 ]))
console.log(findUniq([ 1, 2, 1,1,1 ]))

// kata 5 6kyu--same findUniq for a larger array set for efficiency
function findUniqueNumber(arr) {
  // Create an object to store the count of each number
  const count = {};

  // Iterate through the array and update the count
  for (let num of arr) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  // Find the unique number
  for (let key in count) {
    if (count[key] === 1) {
      return parseInt(key);
    }
  }

  // Return null if no unique number is found
  return null;
}

// Example usage
const array = [1, 2, 1, 1, 1];
const uniqueNumber = findUniqueNumber(array);

console.log("The unique number is:", uniqueNumber);