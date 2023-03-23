//=================================== twoSum===================================
// for (let i = 0; i < nums.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (nums[i] + nums[j] === target) {
//       return [i, j];
//     }
//   }
// }
var twoSum = function (nums, target) {
  left = 0;
  right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else if (sum === target) {
      return [left + 1, right + 1];
    }
  }
};

// var twoSum = function (nums, target) {
//   const indices = {};
//   nums.forEach((item, index) => {
//     indices[item] = index;
//   });
//   for (let index = 0; index < nums.length; index++) {
//     const complement = target - nums[index];
//     console.log("index", index);
//     console.log(complement);
//     if (indices[complement] !== undefined && indices[complement] !== index) {
//       return [index, indices[complement]];
//     }
//   }
// };
console.log(twoSum([3, 4, 5, 2], 6));
//=================================== maxArea===================================
// var maxArea = function (height) {
//   let left = 0;
//   let right = height.length - 1;
//   let maxArea = 0;
//   let area = 0;
//   while (left < right) {
//     area = (right - left) * Math.min(height[right], height[left]);
//     maxArea = area > maxArea ? area : maxArea;
//     height[left] < height[right] ? left++ : right--;
//   }
//   return maxArea;
// };
// console.log(maxArea([1, 8, 6, 2, 5]));

// ===============threeSums==================
// for (let k = 0; k < j; k++) {
//   console.log("index", sortedNums.indexOf(i), j, k);
//   console.log("nums", i, sortedNums[j], sortedNums[k]);
//   console.log("sums", i + sortedNums[j] + sortedNums[k]);
//   if (i + sortedNums[j] + sortedNums[k] === 0) {
//     threeSumArr.push([i, sortedNums[j], sortedNums[k]]);
//   }
// }

// if (i > 0) {
//   for (let j = sortedNums.indexOf(i) - 2; j >= 0; j--) {
//     console.log("i", i);
//     console.log(sortedNums[j], sortedNums[j + 1], sortedNums[j + 2]);
//     // if (threePartialRight(sortedNums, j) < 0) {
//     //   break;
//     // } else if (threePartialRight(sortedNums, j) > 0) {
//     //   continue;
//     // } else {
//     //   threeSumArr.push([
//     //     sortedNums[j],
//     //     sortedNums[j + 1],
//     //     sortedNums[j + 2],
//     //   ]);
//     // }
//   }
// var threePartialRight = function (arr, index) {
//   return arr[index] + arr[index + 1] + arr[index + 2];
// };
// var twoPartial = (arr, index) => arr[index] + arr[index - 1];

// var threeSum = function (nums) {
//   let threeSumArr = [];
//   nums.sort((x, y) => x - y);
//   let firstPosIndex;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//       firstPosIndex = i;
//       break;
//     } else firstPosIndex = nums.length - 1;
//   }
//   console.log(nums);
//   for (let i = firstPosIndex; i < nums.length; i++) {
//     console.log("i", i, nums[i]);
//     for (let j = firstPosIndex; j >= 0; j--) {
//       if (i !== j) {
//         console.log("j", j);
//         if (twoPartial(nums, j) + nums[i] < 0) {
//           break;
//         } else if (twoPartial(nums, j) + nums[i] > 0) {
//           continue;
//         } else if (twoPartial(nums, j) + nums[i] === 0) {
//           threeSumArr.push([nums[i], nums[j], nums[j - 1]]);
//         }
//       }
//     }
//   }
//   let stringArray = threeSumArr.map(JSON.stringify);
//   let uniqueStringArray = new Set(stringArray);
//   let uniqueArray = Array.from(uniqueStringArray, JSON.parse);
//   return uniqueArray;
// };
// console.log(threeSum([-2, 0, 1, 1, 2]));
