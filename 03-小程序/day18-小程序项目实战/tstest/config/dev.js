import defaults from './default'

export default Object.assign({}, defaults, {
    port: 9005,
    host: "http://localhost:9001",
    redis: {
        host: "localhost",
        port: 6379,
        password: "root",
        db: 2,
        connectTimeout: 3000,
        prefix: "koala:",
    },
})
