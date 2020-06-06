// 1.1.1
// const a = (0 + 15) / 2
// const b = 2.0e-6 * 100000000.1
// const c = true && false || true && true
// a = 7.5
// b = 200.0000002
// c = false X true
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(true && false);
// console.log(true && false || true);
// console.log(true && false || true && true);

// 1.1.2
// const a = (1 + 2.236) / 2
// const b = 1 + 2 + 3 + 4.0
// const c = 4.1 >= 4
// const d = 1 + 2 + '3'
// a = 1.618 number
// b = 10 number
// c = true 
// d = '123' X '33'
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(typeof(d));

// 1.1.3
// const isEqual = (a, b, c) => {
//     if (a === b && a === c) return 'equal'
//     return 'not equal'
// }
// console.log(isEqual(3, 3, 3));
// console.log(isEqual(1, 2, 3));

// 1.1.4

// 1.1.5
// const midst = (x, y) => {
//     return 0 < x && x < 1 && 0 < y && y < 1
// }
// console.log(midst(0.123456, 0.987321654123));
// console.log(0 < 0.123456 < 1);

// 1.1.6
// const whatWillBePrinted = (n) => {
//     let f = 0
//     let g = 1
//     for (let i = 0; i < n; i++) {
//         console.log(f);
//         f = f + g
//         g = f - g
//     }
// }
// whatWillBePrinted(20)

// 1.1.7
// const a = () => {
//     let t = 625
//     while (Math.abs(t - 625 / t) > .001) {
//         t = (625 / t + t) / 2.0
//     }
//     console.log("%.5f\n", t);
// }
// a()

// const b = () => {
//     let sum = 0
//     for (let i = 1; i < 1000; i++) {
//         for (let j = 0; j < i; j++) {
//             sum++
//         }
//     }
//     console.log(sum);
// }
// b()   //499500

// const c = () => {
//     let sum = 0
//     for (let i = 1; i < 1000; i *= 2) {
//         for (let j = 0; j < 1000; j++) {
//             sum++
//         }
//     }
//     console.log(sum);
// }
// c() //10000

// 1.1.8
// const toBinaryString = (n) => {
//     let s = ''
//     console.log(n.toString(2));
//     while (n >= 1) {
//         s = n % 2 + s
//         n = parseInt(n / 2)
//     }
//     console.log(s);
// }
// toBinaryString(123456789)