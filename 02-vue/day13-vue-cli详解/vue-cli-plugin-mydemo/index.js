const FileManager = require('./file-manager');

class PathResolver {
    resolveDistPath(sourcePath, outputPattern) {
        const fileNamePattern = /([^\/]+)\.md$/g;
        const fileInfo = fileNamePattern.exec(sourcePath);
        const fileName = fileInfo ? fileInfo[1] : 'index';
        return outputPattern.dir + outputPattern.filename.replace('[name]', fileName);
    }
}

module.exports = (api, options) => {
    const configPath = `${process.cwd()}/md.config.js`;
    const getConfig = () => {
        return require(configPath);
    };
    const fileManager = new FileManager();
    const pathResolver = new PathResolver();
    api.registerCommand('generator-md', args => {
        const config = getConfig();
        fileManager
            .getFiles(config.src)
            .then(files => {
                return fileManager.readFileContents(files)
                    .then(contents => {
                        return fileManager.convert2Html(contents);
                    })
                    .then(htmls => {
                        return fileManager.html2Component(htmls);
                    })
                    .then((contents) => {
                        return files
                            .map((filePath, index) => ({
                                path: pathResolver.resolveDistPath(filePath, config.output),
                                content: contents[index]
                            }));
                    })
                    .then(components => {
                        return fileManager.writeFiles2Disk(components, config.output.dir);
                    });
            })
    });
};
