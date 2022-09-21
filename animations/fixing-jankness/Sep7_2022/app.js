// async function doSomeExpensiveWork() {
//     await new Promise((resolve, reject) => {

//     });
// }

function doSomeExpensiveWork() {
    for(let i=0; i<1000000000; i++) {}
    console.log('task done...');
}

setInterval(() => doSomeExpensiveWork(), 400);