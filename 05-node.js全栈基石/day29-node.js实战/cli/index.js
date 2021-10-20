#! /usr/bin/env node
console.log('hello world');

// const readLine = require('readline);
const path = require('path');
const childProcess = require('child_process');
const { program } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const clui = require('clui');

// console.log(process.argv);

program
    .arguments('<dir>')
    .description('this is apply')
    .action((dir) => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'framework',
                message: 'which framework do you like?',
                choices: ['react', 'vue', 'others']
            }
        ])
        .then((answers) => {
            console.log('answers: ', answers);
            console.log('dir input is: ', dir);
            // const fullDir = path.resolve(__dirname, dir);
            const fullDir = path.resolve(process.cwd(), dir);
            const command = `git clone https://github/loatheb/${answers.framework}-boilerplate.git ${fullDir}`;
            console.log('command: ', command);
            childProcess.execSync(command);
        })
    });

program.parse( process.argv);

// console.log(program.apply);
