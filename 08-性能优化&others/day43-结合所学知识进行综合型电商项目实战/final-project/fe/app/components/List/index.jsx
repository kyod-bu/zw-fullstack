import React from 'react';
import Item from './Item';

import styles from './list.less';

export default function (props) {
    return (
        <div className={styles['list-container']}>
            {props.data.map((item, index) => {
                return <Item key={index} data={item} />
            })}
        </div>
    );
}
