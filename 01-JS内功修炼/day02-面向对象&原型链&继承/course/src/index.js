class Teacher {
    static mood = 'good'; // 静态属性

    constructor() {
        this.money = 10000;
    }

    buybuybuy() {
        this.money -= 100;
        console.log('money: ', this.money);
    }
}
// 调用静态属性
Teacher.mood = 'super good';
var teacher = new Teacher();


// Babel编译一下这个文件，看看编译后的结果
// 编译命令： ./node_modules/.bin/webpack

// todo:第二节课，45min工程相关部分，需要回头重新看
// 添加一个webpack.config.js
// 添加一个 babel.config.js，配置增加 plugins
