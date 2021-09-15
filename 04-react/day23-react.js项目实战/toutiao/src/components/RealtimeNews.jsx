import React from "react";
import news from "../api/mockRealtimeNews.json";

export const RealtimeNews = () => {
  return (
    <div className="new-struct bui-box">
      <div className="bui-box">
        <div className="pane-module">
          <div className="module-head">24 小时热闻</div>

          <ul className="module-content article-list">
            {news.data.slice(0, 4).map((n, i) => {
              const { image_url, title } = n;
              return (
                <li key={i} className="article-item">
                  <a className="news-link">
                    <div className="module-pic news-pic">
                      <img src={image_url} />
                    </div>

                    <div className="news-inner">
                      <p className="module-title">{title}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
