import React from "react";

import { withTTPrefix } from "../utils/urlResolver";
import moment from "moment";
import "moment/locale/zh-cn";

// moment.locale("zh-CN");
console.log(moment.locale());

export const FeedItem = (props) => {
    const { data } = props;
    const {
        single_mode,
        title,
        source,
        source_url,
        chinese_tag,
        media_url,
        media_avatar_url,
        comments_count,
        behot_time,
        image_url,
    } = data;

    if (single_mode) {
        return (
            <div className="bui-box single-mode">
                <div className=" bui-left single-mode-lbox">
                    <a className="img-wrap">
                        <img src={image_url} />
                    </a>
                </div>

                <div className="single-mode-rbox">
                    <div className="single-mode-rbox-inner">
                        <div className="title-box">
                            <a>{title}</a>
                        </div>

                        <div className="bui-box footer-bar">
                            <div className="bui-left footer-bar-left">
                                <a
                                    href={"/"}
                                    className="footer-bar-action tag tag-style-other"
                                >
                                    {chinese_tag}
                                </a>
                                <a
                                    href={withTTPrefix(media_url)}
                                    className="footer-bar-action media-avatar"
                                >
                                    <img src={media_avatar_url} alt="x" />
                                </a>

                                <a
                                    href={withTTPrefix(media_url)}
                                    className="footer-bar-action source"
                                >
                                    &nbsp;{source}&nbsp;
                                </a>

                                <a href={"/"} className="footer-bar-action">
                                    &nbsp;{comments_count} 评论&nbsp;
                                </a>

                                <span className="footer-bar-action">
                                    &nbsp;
                                    {moment(
                                        new Date(behot_time * 1000)
                                    ).fromNow()}
                                </span>
                            </div>

                            <div className="bui-right">
                                <div className="action-dislike">
                                    <i
                                        className="bui-icon icon-close_small"
                                        style={{
                                            fontSize: 16,
                                            color: "rgb(211, 211, 211)",
                                        }}
                                    ></i>
                                    不感兴趣
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="no-mode">
            <div className="title-box">
                <a href={withTTPrefix(source_url)} className="link">
                    {title}
                </a>
            </div>
            <div className="bui-box footer-bar">
                <div className="bui-left footer-bar-left">
                    <a href={"/"} className="footer-bar-action tag tag-style-other">
                        {chinese_tag}
                    </a>
                    <a href={withTTPrefix(media_url)} className="footer-bar-action media-avatar">
                        <img src={media_avatar_url} alt="x" />
                    </a>

                    <a href={withTTPrefix(media_url)} className="footer-bar-action source">
                        &nbsp;{source}&nbsp;
                    </a>

                    <a href={"/"} className="footer-bar-action">&nbsp;{comments_count} 评论&nbsp;</a>
                    <span className="footer-bar-action">
                        &nbsp;{moment(new Date(behot_time * 1000)).fromNow()}
                    </span>
                </div>

                <div className="bui-right">
                    <div className="action-dislike">
                        <i
                            className="bui-icon icon-close_small"
                            style={{
                                fontSize: 16,
                                color: "rgb(211, 211, 211)",
                            }}
                        ></i>
                        不感兴趣
                    </div>
                </div>
            </div>
        </div>
    );
};
