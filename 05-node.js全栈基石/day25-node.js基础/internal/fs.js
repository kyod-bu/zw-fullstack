const fs = require('fs');
const path = require('path');

const pathToFile = path.resolve(__dirname, './text');

// // 异步读取，回调
// // error first
// fs.readFile(pathToFile, 'utf-8', function(err, result) {
//     if (err) {
//         console.log('error:::', err);
//         return err;
//     }
//     console.log('result:::', result);
// });

// // 同步读取
// const content = fs.readFileSync(pathToFile, 'utf-8');
// console.log('sync content:::', content);

// promise 化
function promisify(func) {
    return function(...args) {
        // console.log('args:::', ...args);
        return new Promise((resolve, reject) => {
            args.push(function(err, result) {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
            return func.apply(func, args);
        });
    };
}

const readFileAsync = promisify(fs.readFile);

readFileAsync(pathToFile, 'utf-8')
    .then(content => {
        console.log('content:::', content);
    })
    .catch(e => {
        console.log('e:::', e);
    });
