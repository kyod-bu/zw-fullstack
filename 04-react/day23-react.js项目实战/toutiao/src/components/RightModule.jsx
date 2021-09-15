import React from "react";

import { Search } from "./Search";
import { Login } from "./Login";
import { RealtimeNews } from "./RealtimeNews";
import { MoreItems } from "./MoreItems";
import { FriendLinks } from "./FriendLinks";

export const RightModule = () => {
    return (
        <div className="bui-right index-right-bar">
            <Search />
            <Login />
            <RealtimeNews />
            <MoreItems />
            <FriendLinks />
        </div>
    );
}
