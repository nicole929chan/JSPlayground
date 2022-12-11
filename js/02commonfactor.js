// let n = 18
// let m = 36
let n = 16
let m = 24
let results = new Set();

results = findFactor(n)

if ((m / n) % 1 === 0) {
    results.forEach((value) => {
        // n的因數即為m的因數
        console.log('n如果是m的因數, 則n的因數也會是m的因數, 即是雙方的公因數;')
        console.log(value)
    })
} else {
    console.log('n不是m的因數, 故須由n的因數中尋找m的因數, 即為雙方的公因數;')
    results.forEach((value) => {
        if ((m / value) % 1 === 0) {
            console.log(value)
        }
    })
}


function findFactor(x) {
    let factors = new Set()
    let quotient;

    for (let i = 1; i <= x; i++) {
        quotient = x / i
        if (quotient % 1 === 0) {
            factors.add(i)
        }
    }

    return factors
}