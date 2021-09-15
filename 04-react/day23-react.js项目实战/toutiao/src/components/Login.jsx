import React from "react";

export const Login = () => {
  return (
    <div>
      <div className="outer">
        <div
          className="login inner"
          style={{
            height: 196,
            padding: "20px 28px 15px",
          }}
        >
          <p
            className="login-msg"
            style={{
              fontSize: 12,
              lineHeight: "17px",
              color: "#777",
            }}
          >
            登录后可以保存您的浏览喜好、评论、收藏，并与 APP
            同步，更可以发布微头条
          </p>

          <a href="https://sso.toutiao.com">
            <button
              className="login-button"
              style={{
                width: 240,
                height: 40,
                margin: "16px 0 14px",
                fontSize: 14,
                lineHeight: "20px",
                color: "#fff",
                background: "#ed4040",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              登录
            </button>
          </a>

          <ul className="third-login">
            <li
              className="sns qq"
              style={{
                display: "inline-block",
                position: "relative",
                width: 36,
                height: 58,
                cursor: "pointer",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 36px",
                marginRight: 24,
                backgroundImage:
                  "url(//s3.pstatp.com/toutiao/static/img/icon_qq_pc.5baa07b.svg),none",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 6,
                  top: 41,
                  width: 24,
                  fontSize: 12,
                  lineheight: "17px",
                  color: "#777",
                }}
              >
                QQ
              </span>
            </li>
            <li
              className="sns weixin"
              style={{
                display: "inline-block",
                position: "relative",
                width: 36,
                height: 58,
                cursor: "pointer",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 36px",
                backgroundImage:
                  "url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQwIDQwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzM1YzAyMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmljb25fd2VpeGluX3BjPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMCw0MEEyMCwyMCwwLDEsMSw0MCwyMCwyMCwyMCwwLDAsMSwyMCw0MFpNMjAsMUExOSwxOSwwLDEsMCwzOSwyMCwxOSwxOSwwLDAsMCwyMCwxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LjMzLDE2Ljc2aC40MWMtLjU4LTMuMS0zLjgtNS40Ny03LjY5LTUuNDctNC4zLDAtNy43OCwyLjktNy43OCw2LjQ4QTYuMDgsNi4wOCwwLDAsMCwxMiwyMi43YS40Ni40NiwwLDAsMSwuMTguNDlsLS4zNywxLjM3Yy0uMTEuNDEuMS41Ny40Ny4zNmwxLjY3LTFhLjYzLjYzLDAsMCwxLC41LS4wNiw5LjE5LDkuMTksMCwwLDAsMi42Mi4zOGguNDJhNSw1LDAsMCwxLS4yNi0xLjU5QzE3LjIxLDE5LjQsMjAuNCwxNi43NiwyNC4zMywxNi43NlptLTQuNjktMi4wOWExLDEsMCwxLDEtMSwxQTEsMSwwLDAsMSwxOS42NCwxNC42NlptLTUuMiwyLjA3YTEsMSwwLDEsMSwxLTFBMSwxLDAsMCwxLDE0LjQ0LDE2LjczWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMwLjczLDIyLjY4YzAtMy0yLjktNS40LTYuNDgtNS40cy02LjQ4LDIuNDItNi40OCw1LjQsMi45LDUuNCw2LjQ4LDUuNGE3LjYzLDcuNjMsMCwwLDAsMi4yMS0uMzIuNDYuNDYsMCwwLDEsLjM2LDBsMS40MS44MWMuMzEuMTguNDksMCwuNC0uMzFsLS4zLTEuMTZhLjMzLjMzLDAsMCwxLC4xMy0uMzVBNS4wOCw1LjA4LDAsMCwwLDMwLjczLDIyLjY4Wm0tOC42NC0uODVhLjg4Ljg4LDAsMSwxLC44OC0uODhBLjg4Ljg4LDAsMCwxLDIyLjA5LDIxLjgzWm00LjI5LDBhLjg4Ljg4LDAsMSwxLC44OC0uODhBLjg4Ljg4LDAsMCwxLDI2LjM5LDIxLjgzWiIvPjwvc3ZnPg==),none",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 6,
                  top: 41,
                  width: 24,
                  fontSize: 12,
                  lineheight: "17px",
                  color: "#777",
                }}
              >
                微信
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
