import React from "react";

export const Header = () => {
  return (
    <div className="toutiao-header">
      <div className="topbar">
        <div className="bui-left clearfix">
          <a
            href="//app.toutiao.com/news_artile/"
            className="download-app tb-link"
          >
            下载 APP
          </a>
          <a className="register-mp tb-link" href="//mp.toutiao.com">
            注册头条号
          </a>
          <div className="weather-tool"></div>
        </div>
        <div className="bui-right"></div>
      </div>
    </div>
  );
};
