console.log('enter app.js');

const p1 = new Promise(function(resolve, reject) => {
    setTimeout(() => {
        resolve('p1 resolve message')
    }, 2000)
})

p1.then(function(value) {
    console.log('p1 then success')
    console.log(value)
}, function(reason) {
    console.log('p1 then fail')
    console.log(reason);
})

console.log('end app.js');