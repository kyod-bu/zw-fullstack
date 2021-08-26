/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    config?: object
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}