function a() {
    Promise.resolve().最终(); // 语句调用
}

a(); // 函数调用

// 使用Babel编译，查看编译结果
