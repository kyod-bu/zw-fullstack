import React from 'react';
import cx from 'classnames';

const tabs = [
    { current: true, label: '发微头条'},
    { label: '写文章'},
    { label: '提问题'},
    { label: '发视频'},
];

export const UGCBox = () => {
    return (
        <div className="ugcBox">
            <div className="ugcBox-inner">
                <ul className="bui-box ugc-tab-list">
                    { tabs.map(tab => (
                        <li
                            key={tab.label}
                            className={cx("ugc-tab-item", "bui-left", { current: tab.current })}
                        >
                            {tab.label}
                        </li>
                    ))}
                </ul>

                <div className="ugc-content">
                    <div>
                        <div className="imgBox upload-box">
                            <textarea
                                placeholder="有什么新鲜事想告诉大家"
                                className="title-input"
                            />
                            <p className="words-number">0/2000 字</p>
                            <div className="bui-box upload-footer">
                                <div className="bui-left">
                                    <span className="show-image-uploader show-uploader">
                                        <img
                                            src="http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/toutiao.com/image-icon.png"
                                            alt="a"
                                            className="image-icon"
                                            style={{ marginRight: 6 }}
                                        ></img>
                                        <span>图片</span>
                                    </span>

                                    <span className="show-emoji show-uploader">
                                        <img
                                            src="http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/toutiao.com/emoji-icon.png"
                                            alt="b"
                                            className="image-icon"
                                            style={{ marginRight: 6 }}
                                        ></img>
                                        <span>表情</span>
                                    </span>
                                </div>
                                <div className="bui-right">
                                    <span className="msg-tip"></span>
                                    <a className="upload-publish" href="/">发布</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
