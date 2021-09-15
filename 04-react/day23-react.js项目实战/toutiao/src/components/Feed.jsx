import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFeed } from "../redux/actions/feed";
import { FeedItem } from "./FeedItem";
import { useInfiniteScroll } from "react-infinite-scroll-hook";

export const Feed = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.feed.data);
    const loading = useSelector((store) => store.feed.fetching);

    const infiniteRef = useInfiniteScroll({
        loading,
        hasNextPage: true,
        onLoadMore: () => {
            if (loading) {
                return;
            }
            console.log("load more");
            dispatch(fetchFeed());
        },
        // scrollContainer: document.body,
    });

    useEffect(() => {
        dispatch(fetchFeed());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="feed-inifinite-wrapper">
            <ul ref={infiniteRef}>
                {data.map((f) => {
                    const { item_id } = f;
                    return (
                        <li key={item_id}>
                            <FeedItem data={f} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
