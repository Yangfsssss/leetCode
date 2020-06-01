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
const longestCommonPrefix = strs => {
    let shortest

    for (let i = 0; i < strs.length; i++) {
        shortest = strs[i].length < strs[i + 1].length ? strs[i].length : strs[i + 1].length
    }

    while (j=0,k=0,j<str.length) {
        if(strs[j][k]===strs[j+1][k]){
            j++
        }
    }
}

console.log('racecar'[0]);





