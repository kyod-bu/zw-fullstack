const chalk = require("chalk");
const Prompt = require("inquirer");
const download = require("./download");

// const origin = "git@github.com:babyWatchmen/miniprj.git";
// 报错：128download，需要修改为：
// const origin = "github:babyWatchmen/miniprj#master";
// git@github.com:kyod-bu/kyod-bu.github.io.git
// const origin = "github:kyod-bu/notes#master";
const origin = "kyod-bu/notes";


const initQuestions = (name) => [
    {
        type: "confirm",
        name: "isInit",
        message: `确定要在${chalk.green(name)}文件夹下创建项目?`,
        prefix: "?",
    },
    {
        name: "appid",
        message: "appid:",
    },
    {
        type: "rawlist",
        name: "mlist",
        message: '请选择',
        choices: ["react", "vue", "jq"]
    },
    {
        type: "checkbox",
        name: "select",
        message: '请选择',
        choices: ["1", "2", "3"]
    }
];

const init = async (name) => {
    try {
        const { isInit, appid } = await Prompt.prompt(initQuestions(name));
        if (isInit) {
            await download(origin, name, {
                appid,
            });
        } else {
            console.log(chalk.red("程序提前结束"));
        }
    } catch (error) {
        console.log(chalk.red(error));
    }
};

module.exports = init;
