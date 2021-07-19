/**
 * @file 所有 item 的基类
 * @author kyod
 */
export default {
    props: ['title', 'imageList', 'id'],
    methods: {
        skip(e) {
            // 通过this可以直接找到router？？？ 怎么来的？？？
            this.$router.push({
                path: '/page/detail/kyod/text'
            });
        }
    }
}

// push 和 replace 的区别：
// ----replace 替换掉目前的路由，并不能回退到上一个路由
// ----push 在历史栈中新增一个页面，回退正常
