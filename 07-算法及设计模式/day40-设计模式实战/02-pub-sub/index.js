// const { EventEmitter } = require("./events");

// const eventEmitter = new EventEmitter();

// eventEmitter.on("data", (value) => {
//     console.log("on data::", value);
// });
// const cb = () => {
//     console.log("cb");
// };
// eventEmitter.on("data", cb);

// eventEmitter.emit("data", "hello");

// eventEmitter.off("data", cb);

// eventEmitter.emit("data", "hey");

// // on data:: hello
// // cb
// // on data:: hey

// class Runner extends EventEmitter {
//     run() {
//         this.emit("run");
//     }
// }

// const runner = new Runner();

// runner.on("run", () => {
//     console.log("running!!!");
// });

// runner.run();

// // document.body.addEventListener('click', () => {
// //     // ...
// // })

const { Observable } = require("./observable");

Observable.of([1, 2, 3]).subscribe((value) => console.log(value));

// 1 ... 2 ... 3
