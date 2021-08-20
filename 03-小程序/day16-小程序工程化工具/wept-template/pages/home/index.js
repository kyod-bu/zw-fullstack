const appInst =  getApp();

Page({
    data: {
        message: 'friends',
    },
    onclick: function () {
        const number = Math.ceil(Math.random() * 100);
        this.setData({
            message: number.toString()
        })
    }
})
