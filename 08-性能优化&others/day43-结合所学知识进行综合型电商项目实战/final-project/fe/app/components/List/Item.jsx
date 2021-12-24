import React from 'react';
import { Link } from 'react-router-dom';
import styles from './item.less';

export default function () {
    return (
        <div className={styles['list-item']}>
            <Link to={`/detail/${data.id}`}>
                <div className={styles['item-img-container']}>
                    inijjj
                </div>
                <div className={styles['item-content']}>
                    <div className={styles['item-title']}>
                        jjjj
                    </div>
                </div>
            </Link>
        </div>
    );
}
