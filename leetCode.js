// leetCode 1
// const twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };
// console.log(twoSum([1,3,5,7,10],12 ));


// leetCode 7
// const reverse = x => {
//     const result = x < 0 ? - ((-x + '').split('').reverse().join('') - 0) : ((x + '').split('').reverse().join('') - 0)
//     return result < Math.pow(-2, 31) || result > (Math.pow(2, 31) - 1) ? 0 : result
// }
// console.log(reverse(-5548));
// console.log(reverse(1534236469));


// leetCode 9
// const isPalindrome = x => {
//     console.log(x);
//     console.log(((x + '').split('').reverse().join('') - 0));
//     return x === ((x + '').split('').reverse().join('') - 0)
// }
// console.log(isPalindrome(123454321));


// leetCode 13
// const romanToInt = s => {
//     let result = 0
//     s.split('').map(i => {
//         switch (i) {
//             case 'M':
//                 result += 1000
//                 break;
//             case 'D':
//                 result += 500
//                 break;
//             case 'C':
//                 result += 100
//                 break;
//             case 'L':
//                 result += 50
//                 break;
//             case 'X':
//                 result += 10
//                 break;
//             case 'V':
//                 result += 5
//                 break;
//             case 'I':
//                 result += 1
//                 break;
//         }
//     })
//     if (s.indexOf('IV') != -1) {
//         result -= 2
//     }
//     if (s.indexOf('IX') != -1) {
//         result -= 2
//     }
//     if (s.indexOf('XL') != -1) {
//         result -= 20
//     }
//     if (s.indexOf('XC') != -1) {
//         result -= 20
//     }
//     if (s.indexOf('CD') != -1) {
//         result -= 200
//     }
//     if (s.indexOf('CM') != -1) {
//         result -= 200
//     }
//     return result
// }
// console.log(romanToInt('MCMXCIV'));
// console.log('abcdefg'.indexOf('ab'));


// leetCode 14
// const longestCommonPrefix = strs => {
//     if (strs.length === 0) return ''
//     if (strs.length === 1) return strs[0]
//     let shortest = strs[0].length
//     for (let i = 0, k = 0; i < strs.length - 1; i++) {
//         if (strs[k].length > strs[i + 1].length) {
//             shortest = strs[i + 1].length
//             k = i + 1
//         }
//     }
//     let result = []
//     for (let j = 1, l = 0; l < shortest;) {
//         if (strs[0].charAt(l) === strs[j].charAt(l)) {
//             j++
//             if (j === strs.length) {
//                 result.push(strs[0].charAt(l))
//                 j = 1
//                 l++
//             }
//         } else if (l > 0) {
//             return result.join('')
//         } else {
//             return ''
//         }
//     }
//     return result.join('')
// }


// leetCode 20
// const isValid = s => {
//     if (s.length === 0) return true
//     if (s.length === 1) return false

//     let i = -1
//     let array = []

//     for (item of s.split('')) {
//         switch (item) {
//             case '(':
//                 i++
//                 array.push(1)
//                 continue
//             case '{':
//                 i++
//                 array.push(2)
//                 continue
//             case '[':
//                 i++
//                 array.push(3)
//                 continue
//             case ')':
//                 if (array[i] != 1) return false
//                 array.pop()
//                 i--
//                 break;
//             case '}':
//                 if (array[i] != 2) return false
//                 array.pop()
//                 i--
//                 break;
//             case ']':
//                 if (array[i] != 3) return false
//                 array.pop()
//                 i--
//                 break;
//         }

//         // console.log(array);
//         // console.log(array.length);

//         // return result.pop() == false ? false : true

//     }
//     return array.length === 0 ? true : false
// }
// () = 1
// {} = 2
// [] = 3
// 1,-1,2,-2,3,-3
// ()[]{}{}
// ()[]{}
// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("{[]}"));
// console.log(isValid("([)]"));


// leetCode 21
// const mergeTwoLists = (l1, l2) => {
    
// }


// leetCode 26
// const removeDuplicates = nums => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 nums.splice(j, 1)
//                 j--
//             }
//         }
//     }
//     return nums.length
// }
// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));








