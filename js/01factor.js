//
let num = 12;
let quotient = 0;
let lastQuotient = 0;
let items = [];
let items2 = new Set()

// 全部除數loop一遍
// for (let divisor = 1; divisor <= num; divisor++) {
//     quotient = num / divisor;
//     // 除數1是任意數的因數
//     // %1===0 商為整數
//     if (quotient % 1 === 0) {
//         items.push(divisor)
//     }
// }
// console.log(items);

// 符合條件時中斷loop
// Set會排除重複的值
for (let divisor = 1; divisor <= num; divisor++) {
    console.log('divisor = ', divisor, 'loop')
    quotient = num / divisor;
    // 1是任意數的因數
    // %1===0 商為整數
    if (quotient % 1 === 0) {
        items2.add(divisor)     // 除數
        items2.add(quotient)    // 商數

        // 除數等於上一個商數
        if (divisor === lastQuotient) {
            break;
        }
        // 除數等於商數
        if (divisor === quotient) {
            break;
        }

        lastQuotient = quotient;
    }
}
console.log(items2);
