// app.ts
// TODO: 试用一下 lodash
// import lodash from 'lodash';
import { devConfig } from '../config/index';

App<IAppOption>({
  globalData: {
    config: devConfig
  },
  onLaunch() {
    // console.log("=======", lodash);
    console.log("=======this.globalData.config::::", this.globalData.config);
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})