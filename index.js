function hasTargetSum(array, target) {
  // Write your algorithm here
  //[3, 8, 12, 4, 11, 7] and the target is 10
  for (let i = 0; i < array.length; i++) {
    let sum = 0
    sum += array[i] //3
    for (let j = 0; j < array.length; j++) {
      if (i != j) {
        sum += array[j] //3 + 7
        if(sum == target) {
          return true
        }
        else {
          sum -= array[j] // 3
        }
      }
    }
  }
  return false

}
/* 
O(n^2)
*/

/* 
  For each element in the array:
    Initialize the sum to 0
    Add to the sum the current element
      For each element in the array:
        If the current index is not the same as the outer index:
          Add to the sum the inner element (of our for loop)
          If the sum is equal to the target:
            Return True
          Otherwise:
            Subtract the inner element from the sum to reset
  Return false if sum never matched target
*/

/*
  Takes in the first element of the array and adds it to the rest of the elements 
  one by one to reach the target sum. If equal it returns true, if it does not
  equal the target sum it moves to the second element in the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([8, 8, 2, 5, 11, 2], 10));

  console.log("");

}

module.exports = hasTargetSum;
