import React from 'react';
import cx from 'classnames';

const channels = [
    { href: '/', active: true, label: '推荐' },
    { href: 'https://www.ixigua.com', label: '西瓜视频' },
    { href: 'https://www.ixigua.com', label: '热点' },
    { href: 'https://www.ixigua.com', label: '直播' },
    { href: 'https://www.ixigua.com', label: '图片' },
    { href: 'https://www.ixigua.com', label: '科技' },
    { href: 'https://www.ixigua.com', label: '娱乐' },
    { href: 'https://www.ixigua.com', label: '游戏' },
    { href: 'https://www.ixigua.com', label: '体育' },
    { href: 'https://www.ixigua.com', label: '懂车帝' },
    { href: 'https://www.ixigua.com', label: '财经' },
    { href: 'https://www.ixigua.com', label: '搞笑' },
    { href: 'https://www.ixigua.com', label: '更多' },
];

export const IndexChannel = (props) => {
    return (
        <div className="bui-left index-channel">
            <div>
                <div className="channel">
                    <a href="/" className="logo">
                        <img
                            src="//s3.pstatp.com/toutiao/static/img/logo.271e845.png"
                            style={{ width: 108, height: 27 }}
                            alt="toutiao.logo"
                        />
                    </a>
                    <ul>
                        { channels.map((channel, index) => {
                            const { href, active, label } = channel;
                            return (
                                <li key={index}>
                                    <a
                                        href={href}
                                        // className="channel-item active"
                                        // className={`channel-item ${active ? 'active' : ''}`}
                                        className={cx("channel-item", { active })}
                                        key={index}
                                    >
                                        <span>{label}</span>
                                    </a>
                                </li>
                            );
                        }) }
                    </ul>
                </div>
            </div>
        </div>
    );
}
