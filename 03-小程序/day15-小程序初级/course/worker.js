/**
 * 逻辑层
 */

let App = null;
let _event = null;

importScripts("./middle.js");
importScripts("./event.js");

// 监听事件
onmessage = function (e) {
    console.log('我是 webworker...', e);
    postMessage('hello');

    _event = new Event("page");
    App = begin();
    if (e.data.isInit) {
        workerMessage({
            type: "endInit",
            opt: Object.keys(App).map((item) => {
                const { id, data, methods, template, mth, eventTypeMaps } =
                    App[item];
                return {
                    id,
                    data: Object.assign({}, data, ...mth),
                    mytemplate: template,
                };
            }),
        });
    }
    console.log("WORKER TASK: ", "RECEIVE", e.data);
    if (e.data.eventType !== undefined) {
        App[e.data.id].eventTypeMaps[e.data.eventType].call(App[e.data.id]);
    }
};

function workerMessage(data) {
    // 发送数据事件
    postMessage(data);
}

function begin() {
    const page_one = new Page(
        {
            id: "page_one",
            data: {
                list: [
                    { name: "张三", sex: "女" },
                    { name: "李四", sex: "男" },
                    { name: "王五", sex: "女" },
                ],
            },

            methods: {
                addList() {
                    this.setState({
                        list: [
                            { name: "张三", sex: "女" },
                            { name: "李四", sex: "男" },
                            { name: "王五", sex: "女" },
                            { name: "刘六", sex: "男" },
                        ],
                    });
                },
                removeList() {
                    console.log("removeList===");
                    this.setState({
                        list: [
                            { name: "李四", sex: "男" },
                            { name: "王五", sex: "女" },
                            { name: "刘六", sex: "男" },
                        ],
                    });
                },
            },

            template: `
                <div>
                    <button onclick = <%:= addList %>>添加</button>
                    <ul>
                    <% for(var i = 0;i < list.length;i++){ %>
                        <li>
                            <p><%= list[i].name %></p>
                            <p><%= list[i].sex %></p>
                        </li>
                    <% } %>
                    </ul>
                    <button onclick = <%= removeList %>>删除</button>
                </div>
            `,
        },
        _event
    );
    const page_two = new Page(
        {
            id: "page_two",
            data: {
                list: [
                    { name: "张三", sex: "女" },
                    { name: "李四", sex: "男" },
                    { name: "王五", sex: "女" },
                ],
            },

            methods: {
                addList() {
                    this.setState({
                        list: [
                            { name: "张三", sex: "女" },
                            { name: "李四", sex: "男" },
                            { name: "王五", sex: "女" },
                            { name: "刘六", sex: "男" },
                        ],
                    });
                },
                removeList() {
                    console.log("嘿嘿111");
                    this.setState({
                        list: [
                            { name: "李四", sex: "男" },
                            { name: "王五", sex: "女" },
                            { name: "刘六", sex: "男" },
                        ],
                    });
                },
            },

            template: `
                <div>
                    <button onclick = <%:= addList %>>添加</button>
                    <ul>
                    <% for(var i = 0;i < list.length;i++){ %>

                        <li>
                            <p><%= list[i].name %></p>
                            <p><%= list[i].sex %></p>
                        </li>

                    <% } %>
                    </ul>
                    <button onclick = <%= removeList %>>删除</button>
                </div>
            `,
        },
        _event
    );
    return {
        page_one: page_one,
        page_two: page_two,
    };
}
