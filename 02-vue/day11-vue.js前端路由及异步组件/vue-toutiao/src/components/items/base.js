/**
 * @file 所有item的基类
 * @author yuanxin
 */
export default {

    props: ['title', 'imageList', 'id'],

    methods: {

        skip(e) {
            // 通过this可以直接找到router？？？
            // 怎么来的？？？
            // replace掉目前的路由，转而换成replace中的path
            // push是在历史栈中新增一个页面
            this.$router.push({
                path: '/page/detail/yuanxin/text'
            });
        }
    }
}
