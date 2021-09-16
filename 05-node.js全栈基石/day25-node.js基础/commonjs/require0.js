const vm = require('vm');
const path = require('path');
const fs = require('fs');

const pathToFile = path.resolve(__dirname, './index.js');
// console.log('pathToFile:::', pathToFile);

const content = fs.readFileSync(pathToFile, 'utf-8');
// console.log('content:::', content);

const script = new vm.Script(content, {
    filename:'index.js'
});
script.runInThisContext();
