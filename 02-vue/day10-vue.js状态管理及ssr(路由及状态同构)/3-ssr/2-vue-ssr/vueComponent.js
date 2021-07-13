const Vue = require('vue');

module.exports = new Vue({
    data() {
        return {
            count: 0
        }
    },
    template: `
        <div>hello vue ssr {{ count }}</div>
    `,
    created() {
        this.count++;
    },
    mounted() {
        this.count++; // 服务端的请求放在 mounted 中
    }
});
