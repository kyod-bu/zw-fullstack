import React from "react";

const more = [
  {
    label: "关于头条",
  },
  {
    label: "加入头条",
  },
  {
    label: "媒体报道",
  },
  {
    label: "媒体合作",
  },
  {
    label: "产品合作",
  },
  {
    label: "合作说明",
  },
  {
    label: "广告投放",
  },
  {
    label: "联系我们",
  },
  {
    label: "用户协议",
  },
  {
    label: "隐私政策",
  },
  {
    label: "侵权投诉",
  },
  {
    label: "廉洁举报",
  },
  {
    label: "企业认证",
  },
  {
    label: "肺炎求助",
  },
  {
    label: "辟谣专区",
  },
];

export const MoreItems = () => {
  return (
    <div className="pane-module">
      <div className="module-head">更多</div>

      <ul className="more-items-content">
        {more.map(({ label }) => {
          return (
            <li key={label} className="item">
              <a>{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
