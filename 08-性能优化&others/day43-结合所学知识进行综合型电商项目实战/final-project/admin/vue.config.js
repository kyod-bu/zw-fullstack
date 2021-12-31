// 通过这种形式 来覆盖里面的一些默认的配置
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://localhost:3000",
                secure: false
            }
        }
    }
}
