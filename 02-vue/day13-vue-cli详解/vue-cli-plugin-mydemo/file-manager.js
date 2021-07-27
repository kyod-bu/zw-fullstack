/**
 * 文件管理器
 */
const fs = require('fs-extra');
const showdown = require('showdown');
const glob = require('glob');
const Converter = require('./converter');

module.exports = class FileManager {

    constructor() {
        this.converter = new Converter();
    }

    /**
     * @desc 获取所有文件
     * @param {string} [dir] - 从哪里获取文件
     * @return {Promise} - 获取到的文件任务
     */
    getFiles(dir) {
        return new Promise((resolve, reject) => {
           glob(dir, {}, function (err, files) {
               resolve(files);
           });
        });
    }

    /**
     * @desc 读取文件内容输出内容数组
     * @param {Array} [files] - 需要读取的所有文件列表 
     * @return {Promise} - 文件列表任务数组
     */
    readFileContents(files) {
        const fileTasks = files.map(file => {
            return fs.readFile(file, 'utf-8');
        });
        return Promise.all(fileTasks);
    }

    convert2Html(contents) {
        return contents.map(content => {
            const mdConverter = new showdown.Converter();
            return mdConverter.makeHtml(content);
        });
    }

    html2Component(htmls) {
        return htmls.map(html => this.converter.convertVue(html));
    }

    /**
     * @param {Array} [filetree] - 所有要存到磁盘里的文件树
     * @param {string} [filetree[0].path] - 文件的存储路径
     * @param {string} [filetree[0].content] - 文件的内容
     */
    writeFiles2Disk(filetree, baseDir) {
        const fileTasks = filetree.map(({path, content}) => {
            return fs.ensureDir(baseDir)
                .then(() => {
                    return fs.writeFile(path, content, 'utf-8');
                });
        });
        return Promise.all([fileTasks]);
    }
};
