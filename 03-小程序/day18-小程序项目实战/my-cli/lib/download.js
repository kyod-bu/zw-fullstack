const { promisify } = require("util");
const fs = require("fs");
const ora = require("ora");
const chalk = require("chalk");
const handlebars = require("handlebars");
const download = promisify(require("download-git-repo"));

const dw = async function (repo, name, opotions = {}) {
    const process = ora(`开始下载 ${chalk.blue(repo)}`);
    process.start();
    process.color = "yellow";
    process.text = `正在下载..... ${chalk.yellow(repo)} `;

    try {
        // await download(repo, dir, opotions);
        download(repo, name, { clone: true }, (err) => {
            if (err) {
                process.fail();
                console.error(
                    chalk.red(
                        `${err}download template fail,please check your network connection and try again`
                    )
                );
                // process.exit(1);
                return;
            }
            // process.succeed();
            process.color = "green";
            process.text = `下载成功 ${chalk.green(repo)} `;
            process.succeed();
            // const meta = {
            //   name,
            //   description: answers.description,
            //   author: answers.author
            // };
            const fileName = `${name}/project.config.json`;
            const content = fs.readFileSync(fileName).toString();
            const result = handlebars.compile(content)(opotions);
            fs.writeFileSync(fileName, result);
        });
    } catch (error) {
        process.color = "red";
        process.text = "下载失败";
        process.fail();
    }
};

module.exports = dw;
