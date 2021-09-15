import React from 'react';

import { UGCBox } from './UGCBox';
import { Feed } from './Feed';

export const IndexContent = (props) => {
    return (
        <div className="bui-left index-content">
            <UGCBox />
            <Feed />
        </div>
    );
}
