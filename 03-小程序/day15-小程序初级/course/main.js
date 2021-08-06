/**
 * 主入口
 * 渲染层
 */
const worker = new Worker("./worker.js");
// worker.postMessage("我是主worker");

const MEvent = new Event("main");
const msg = {
    data: "hello xjy",
    eventType: undefined,
    isInit: true,
    id: undefined,
};

// 事件触发函数
function trick(type, id) {
    msg.eventType = type;
    msg.id = id.id;
    trickPostMsg();
}

const trackEvent = (type, opt) => {
    switch (type) {
        case "addDom":
            MEvent.emit("addDom", opt);
            break;
        case "changeDom":
            MEvent.emit("changeDom", opt);
            console.log(opt);
            break;
        case "endInit":
            MEvent.emit("endInit", opt);
            break;
    }
};

// 设置dom
function setDom(data) {
    const { id, mytemplate } = data;
    if (document.getElementById(`${id}`)) {
        document.getElementById(`${id}`).innerHTML = mytemplate;
    } else {
        const script = document.createElement("script");
        const div = document.createElement("div");
        div.id = id + "-warper";
        script.id = id;
        script.type = "text/html";
        script.innerHTML = mytemplate;
        document.body.appendChild(div);
        document.body.appendChild(script);
    }
    document.getElementById(`${id}-warper`).innerHTML = template(
        mytemplate,
        data.data
    );
}

// 注册事件
MEvent.on("endInit", (data) => {
    msg.isInit = false;
    data.map((item) => {
        setDom(item);
    });
});
MEvent.on("addDom", (dom) => {
    const app = document.querySelector("#app");
    let parser = new DOMParser();
    let doc = parser.parseFromString(dom, "text/xml");
    let node = doc.getElementsByTagName("div")[0];
    app.appendChild(node);
});
MEvent.on("changeDom", (data) => {
    setDom(data);
});

// 监听事件
// 或者可以使用 onMessage 来监听事件：
worker.onmessage = function (e) {
    console.log("MAIN: ", "RECEIVE", e.data);
    trackEvent(e.data.type, e.data.opt);
}

// 触发事件，传递信息给 Worker

function trickPostMsg() {
    worker.postMessage(msg);
}

trickPostMsg();
