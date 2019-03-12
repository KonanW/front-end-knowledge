/* promise 实现异步本质上还是回调 */

const getName = new Promise((resolve,reject)=> {
    setTimeout (() => {
        resolve('nodejs');
    },50);
})

const getNumber = Promise.resolve(1);
const getError = Promise.reject('err');

getError.catch(console.log);

Promise.all([getName,getNumber])
    .then(console.log)
    .catch(console.log);

Promise.race([getName,getNumber])
    .then(console.log)
    .catch(console.log);


getName.then(name => {
    console.log(name);
    return 20;
})
.then(number => {
    console.log(number);
})