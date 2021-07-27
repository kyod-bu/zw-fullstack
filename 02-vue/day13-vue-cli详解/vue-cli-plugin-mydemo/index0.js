const glob = require('glob');
const fs = require('fs-extra');
const showdown = require('showdown');

module.exports = (api, options) => {
    // // 注册一个新的 cli-service 命令
    // api.registerCommand('test-kyod', args => {
    //     console.log('test invoking');
    // });

    // 读取配置文件
    const configPath = `${process.cwd()}/md.config.js`;
    console.log('1、获取配置文件 md.config.js 的路径 ::', configPath);
    const getConfig = () => {
        return require(configPath);
    };
    console.log('2、获取配置文件 md.config.js 的内容 ::', getConfig());
    api.registerCommand('generator-md', args => {
        const config = getConfig();
        console.log('2、md.config.js 的内容 ::', config);
        glob(config.src, {}, function (err, files) {
            console.log('config.src 所指向的文件 ::', files);
            files.map(file => {
                fs.readFile(file, 'utf-8')
                    .then(content => {
                        console.log('这里是文件检索出来的markdown的内容 ::', content);
                        const mdConverter = new showdown.Converter();
                        // const htmlContent = mdConverter.makeHtml(content);
                        // console.log('markdown内容转为html ::::::', htmlContent);
                        return mdConverter.makeHtml(content);
                    })
                    .then(convertedHTML => {
                        console.log('convertedHTML::::', convertedHTML);
                        const vueTemplate = `
                            <template>
                                <div>
                                    ${convertedHTML}
                                </div>
                            </template>
                    
                            <style></style>
                    
                            <script>
                                export default {}
                            </script>
                        `;
                        console.log('vueTemplate::::', vueTemplate);
                    });
            })
        });
    });
};
