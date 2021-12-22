const { Question } = require("./request");

const question = new Question();

let totalCount = 0;

const proxyQuestion = new Proxy(question, {
    get: function (target, key, receiver) {
        totalCount++;
        console.log("fetching...", totalCount);
        return Reflect.get(target, key, receiver);
    },
});

main();

async function main() {
    await proxyQuestion.all();
    await proxyQuestion.all();
    await proxyQuestion.all();
    console.log("totalCount::", totalCount); // 3
}
